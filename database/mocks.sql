INSERT INTO usuarios (nombre, apellido, email, password, fecha_registro, privilege) VALUES
('Don', 'Berriondo', 'admin@admin.com', 'admin', NOW(), True),
('Juan', 'Perez', 'user@user.com', 'user', NOW(), FALSE);


INSERT INTO categorias (nombre, fecha_registro) VALUES
('Ropa', NOW()),
('Comida', NOW()),
('Bebidas alcohólicas', NOW()),
('Musica', NOW());

INSERT INTO productos (nombre, precio, urlimg, stock, descripcion_corta, descripcion_larga, fecha_registro, activo) VALUES 
('Sombrero Paisa', 470708, 'https://exitocol.vtexassets.com/arquivos/ids/7516288/sombrero-paisa-aguadeno-aguadas-talla-4-pro-ac-hueso.jpg?v=637558458199430000', 6, '¡Protege del sol con estilo!', 'El Sombrero Paisa es un accesorio tradicional de la región antioqueña de Colombia. Está hecho a mano por artesanos locales y presenta un diseño colorido y llamativo. Es perfecto para protegerte del sol y agregar un toque de estilo a tu atuendo. ¡No te pierdas la oportunidad de lucir como un verdadero paisa con el Sombrero Paisa!', NOW(), TRUE),
('Café Don Berriondo', 72693, 'https://www.demismanos.org/directorio/contenidos/images/ecommerce_productos/antioquia_bolsa_x250.jpg', 0, '¡Disfruta del mejor café paisa!', 'El Café Don Berriondo es una mezcla única de granos de café seleccionados de las montañas de Antioquia. Este café tiene un sabor suave y equilibrado, con notas de chocolate y frutos secos. Es perfecto para disfrutar en cualquier momento del día y te transportará a los hermosos paisajes cafeteros de Colombia. ¡Prueba el Café Don Berriondo y déjate cautivar por su delicioso sabor!', NOW(), TRUE),
('Camiseta Paisa', 241990, 'https://regalovers.com/wp-content/uploads/2021/07/24-REGALO-PERSONALIZADO-CAMISETA-PAISA-MEDELLIN-1.jpg', 2, '¡Viste como un auténtico paisa!', 'La Camiseta Paisa es una prenda de vestir cómoda y con estilo que representa la cultura y tradiciones de la región antioqueña. Está hecha con materiales de alta calidad y presenta diseños únicos inspirados en la flora, fauna y paisajes de Antioquia. Luce como un verdadero paisa con la Camiseta Paisa y muestra tu amor por esta hermosa región.', NOW(), TRUE),
('Arepa Paisa', 394475, 'https://www.campi.com.co/wp-content/uploads/2021/01/origen-y-curiosidades-de-las-arepas-colombianas-imagen-destacadas.jpg', 3, '¡Deléitate con una deliciosa arepa paisa!', 'La Arepa Paisa es una deliciosa comida típica de la región antioqueña. Está hecha a base de maíz y se caracteriza por su forma redonda y plana. La Arepa Paisa se puede disfrutar sola o acompañada de diferentes ingredientes como queso, carne, aguacate, entre otros. Es perfecta para desayunar, almorzar o cenar. ¡Prueba la auténtica Arepa Paisa y déjate sorprender por su sabor!', NOW(), TRUE),
('Aguardiente Paisa', 239725, 'https://medellinturistico.com/wp-content/uploads/2020/02/Aguardiente.jpg', 3, '¡Celebra al estilo paisa!', 'El Aguardiente Paisa es una bebida alcohólica tradicional de la región antioqueña. Se elabora a partir de la caña de azúcar y se caracteriza por su sabor dulce y anisado. Es perfecto para celebrar ocasiones especiales o simplemente para disfrutar en compañía de amigos y familiares. ¡Brinda al estilo paisa con el Aguardiente Paisa!', NOW(), TRUE),
('Poncho Paisa', 41601, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLApWp0t5WymQapgYG9AYyOrCx3yNqB7fIw&usqp=CAU', 9, '¡Mantente abrigado al estilo paisa!', 'El Poncho Paisa es una prenda tradicional utilizada en la región antioqueña para protegerse del frío. Está hecho con lana de oveja y presenta diseños coloridos y llamativos que representan la cultura paisa. El Poncho Paisa es perfecto para mantenerse abrigado durante los días fríos y también es un símbolo de identidad cultural. ¡No te pierdas la oportunidad de lucir como un verdadero paisa con el Poncho Paisa!', NOW(), TRUE),
('Ponqué Paisa', 177234, 'https://pbs.twimg.com/media/EfTsSUIWkAAGTz8.jpg', 0, '¡Celebra con el mejor ponqué paisa!', 'El Ponqué Paisa es un delicioso pastel tradicional de la región antioqueña. Está hecho con ingredientes frescos y naturales, y presenta un sabor dulce y suave. El Ponqué Paisa es perfecto para compartir en familia o con amigos, y es ideal para celebrar ocasiones especiales. ¡Prueba el auténtico sabor de la región antioqueña con el Ponqué Paisa!', NOW(), TRUE),
('Miel de Abeja Paisa', 175711, 'https://almin.com.co/36323-thickbox_default/miel-de-abejas350gr-caja-12-und.jpg', 2, '¡Endulza tu vida con la miel paisa!', 'La Miel de Abeja Paisa es un producto natural y saludable que se produce en la región antioqueña de Colombia. Esta miel está hecha por abejas locales que recolectan el néctar de las flores de la región. La Miel de Abeja Paisa es rica en nutrientes y antioxidantes, y tiene un sabor dulce y suave. Es perfecta para endulzar tus comidas y bebidas favoritas, y también tiene propiedades curativas para la salud. ¡Prueba la auténtica Miel de Abeja Paisa y disfruta de sus beneficios!', NOW(), TRUE),
('Guitarra Paisa', 202919, 'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/images/img_7945.jpg?h=0d27ee61&itok=bf7CpPmT', 1, '¡Toca al estilo paisa!', 'La Guitarra Paisa es un instrumento musical tradicional de la región antioqueña. Está hecha a mano por artesanos locales con madera de alta calidad y presenta un diseño único y llamativo. La Guitarra Paisa tiene un sonido cálido y envolvente que te transportará a los hermosos paisajes de Antioquia. Es perfecta para músicos profesionales o aficionados que buscan una experiencia auténtica y única. ¡Toca al estilo paisa con la Guitarra Paisa!', NOW(), TRUE),
('Chorizo Paisa', 484023, 'https://i.ytimg.com/vi/TlBWo68z3hE/maxresdefault.jpg', 3, '¡Disfruta del mejor chorizo paisa!', 'El Chorizo Paisa es un embutido tradicional de la región antioqueña. Está hecho con carne de cerdo fresca y especias naturales, y presenta un sabor intenso y picante. El Chorizo Paisa es perfecto para asar a la parrilla o para cocinar en guisos y sopas. Es ideal para compartir en familia o con amigos, y es una deliciosa muestra de la gastronomía paisa. ¡Prueba el auténtico Chorizo Paisa y déjate sorprender por su sabor!', NOW(), TRUE),
('Agua Panela Paisa', 268314, 'https://photo620x400.mnstatic.com/1d6a1c878c3222fbba68379bba793f64/bebida-agua-de-panela.jpg?quality=70&format=pjpg', 2, '¡Refresca tu día con el agua panela paisa!', 'El Agua Panela Paisa es una bebida tradicional de la región antioqueña. Está hecha con panela, agua y limón, y presenta un sabor dulce y refrescante. El Agua Panela Paisa es perfecto para hidratarse en los días calurosos, o para acompañar tus comidas favoritas. Es una bebida natural y saludable que te transportará a los hermosos paisajes cafeteros de Colombia. ¡Prueba el auténtico Agua Panela Paisa y disfruta de su sabor!', NOW(), TRUE),
('Poncho Antioqueño', 220979, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLApWp0t5WymQapgYG9AYyOrCx3yNqB7fIw&usqp=CAU', 0, '¡Mantente abrigado al estilo paisa!', 'El Poncho Antioqueño es una prenda de vestir tradicional de la región antioqueña. Está hecho con lana de oveja y presenta diseños coloridos y llamativos que representan la cultura paisa. El Poncho Antioqueño es perfecto para mantenerse abrigado durante los días fríos y también es un símbolo de identidad cultural. ¡No te pierdas la oportunidad de lucir como un verdadero paisa con el Poncho Antioqueño!', NOW(), TRUE),
('Empanadas Paisas', 186857, 'https://tofuu.getjusto.com/orioneat-local/resized2/mF5KF4ZNuTtWRvdZz-350-350.webp', 2, '¡Disfruta de las mejores empanadas paisas!', 'Las Empanadas Paisas son una deliciosa comida típica de la región antioqueña. Están hechas a base de masa de maíz y se rellenan con carne, papa, arroz y otros ingredientes. Las Empanadas Paisas son perfectas para desayunar, almorzar o cenar, y son ideales para compartir en familia o con amigos. ¡Prueba las auténticas Empanadas Paisas y déjate sorprender por su sabor!', NOW(), TRUE),
('Aguardiente Antioqueño', 421963, 'https://piragua.com.co/wp-content/uploads/2019/11/antioqueno-rojo-260-piragua.jpg', 0, '¡Celebra al estilo paisa!', 'El Aguardiente Antioqueño es una bebida alcohólica tradicional de la región antioqueña. Se elabora a partir de la caña de azúcar y se caracteriza por su sabor dulce y anisado. Es perfecto para celebrar ocasiones especiales o simplemente para disfrutar en compañía de amigos y familiares. ¡Brinda al estilo paisa con el Aguardiente Antioqueño!', NOW(), TRUE),
('Café Tinto Paisa', 303046, 'https://estaticos.elcolombiano.com/documents/10157/0/792x565/6c0/780d565/none/11101/MYGE/image_content_26048298_20160519204438.jpg', 1, '¡Disfruta del mejor café tinto paisa!', 'El Café Tinto Paisa es una bebida tradicional de la región antioqueña. Está hecho con granos de café cuidadosamente seleccionados y presenta un sabor fuerte y aromático. El Café Tinto Paisa es perfecto para disfrutar en cualquier momento del día, y es ideal para compartir en familia o con amigos. ¡Prueba el auténtico Café Tinto Paisa y déjate cautivar por su sabor!', NOW(), TRUE),
('Guitarra Antioqueña', 169792, 'https://exitocol.vtexassets.com/arquivos/ids/2913810/recordatorio-guitarra-antioquena.jpg?v=637317454104500000', 2, '¡Toca al estilo paisa!', 'La Guitarra Antioqueña es un instrumento musical tradicional de la región antioqueña. Está hecha a mano por artesanos locales con madera de alta calidad y presenta un diseño único y llamativo. La Guitarra Antioqueña tiene un sonido cálido y envolvente que te transportará a los hermosos paisajes de Antioquia. Es perfecta para músicos profesionales o aficionados que buscan una experiencia auténtica y única. ¡Toca al estilo paisa con la Guitarra Antioqueña!', NOW(), TRUE);

INSERT INTO categorias_productos (id_categoria, id_producto) VALUES
(1, 1),
(2, 2),
(1, 3),
(2, 4),
(3, 5),
(1, 6),
(2, 7),
(2, 8),
(4, 9),
(2, 10),
(2, 11),
(1, 12),
(2, 13),
(3, 14),
(2, 15),
(4, 16);


INSERT INTO ventas (id_usuario, estado, fecha_registro) VALUES
(2, 'Completada', '2022-05-10'),
(2, 'En proceso', '2023-07-19'),
(2, 'Cancelada', '2022-08-12'),
(2, 'Completada', '2021-03-04'),
(2, 'Cancelada', '2020-02-25');

INSERT INTO ventas_productos (id_venta, id_producto, cantidad, precio) VALUES
(1, 1, 1, 470708),
(1, 2, 2, 72693),
(2, 3, 1, 241990),
(2, 4, 4, 394475),
(2, 5, 1, 239725),
(3, 6, 2, 41601),
(3, 7, 3, 177234),
(3, 8, 3, 175711),
(3, 9, 1, 202919),
(3, 10, 2, 484023),
(4, 11, 2, 268314),
(5, 12, 1, 220979),
(5, 13, 1, 186857),
(5, 14, 1, 421963),
(5, 15, 3, 303046),
(5, 16, 1, 169792);