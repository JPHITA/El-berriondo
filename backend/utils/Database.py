from sqlalchemy import create_engine, text
import os


class Database:
    def __init__(self):
        is_docker = os.environ.get('ISDOCKER', False)
        
        if is_docker:
            # si, para docker...
            self.engine = create_engine("postgresql+psycopg2://admin:adminps@database:5432/ElBerriondo")
            self.db = self.engine.connect()
            
        else:
            self.engine = create_engine("postgresql+psycopg2://admin:adminps@localhost:5432/ElBerriondo")
            self.db = self.engine.connect()

    def query(self, query, **params):
        cursor = self.db.execute(text(query), params).cursor

        cols = [column[0] for column in cursor.description]
        data = cursor.fetchall()

        return list(map(lambda x: dict(zip(cols, x)), data))
    
    def execute(self, query):
        return self.db.execute(text(query))

    def close(self):
        self.db.close()