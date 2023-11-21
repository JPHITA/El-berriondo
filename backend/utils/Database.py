from sqlalchemy import create_engine, text, insert
import os


class Database:
    def __init__(self):
        is_docker = os.environ.get('ISDOCKER', False)

        USER = "admin"
        PASSW = "adminps"
        HOST = "database" if is_docker else "localhost" # si, para docker ...
        PORT = "5432"
        DB = "ElBerriondo"
        
        self.engine = create_engine(f"postgresql+psycopg2://{USER}:{PASSW}@{HOST}:{PORT}/{DB}")
        self.db = self.engine.connect()

    def query(self, query, **params):
        cursor = self.db.execute(text(query), params).cursor

        cols = [column[0] for column in cursor.description]
        data = cursor.fetchall()

        return list(map(lambda x: dict(zip(cols, x)), data))
    
    def insert(self, table, return_id=False, **values):
        stmt = insert(table).values(**values).returning(table.c.id)

        res = self.db.execute(stmt)

        if return_id: 
            self.commit()
            return res.fetchone()[0]
    
    def execute(self, query, **params):
        return self.db.execute(text(query), params)
    
    def commit(self):
        self.db.commit()

    def rollback(self):
        self.db.rollback()

    def close(self):
        self.db.close()