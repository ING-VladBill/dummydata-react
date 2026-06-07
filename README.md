# DummyData Dashboard

Aplicación React que consume la API pública de [DummyJSON](https://dummyjson.com/products) para mostrar un dashboard de productos con navegación entre rutas.

## 🛠️ Tecnologías

- **React 18** — librería de UI
- **Vite** — bundler y dev server
- **React Router v6** — navegación entre rutas
- **Tailwind CSS** — estilos utilitarios
- **Shadcn/ui** (componentes base) — Card, Badge, estilos de diseño
- **Lucide React** — íconos
- **DummyJSON API** — fuente de datos pública

## 📁 Estructura

```
src/
├── components/
│   ├── Card.jsx         # Componente Card estilo Shadcn
│   ├── Navbar.jsx       # Barra de navegación
│   └── ProductCard.jsx  # Tarjeta de producto
├── hooks/
│   └── useProducts.js   # Hook personalizado para fetch de API
├── pages/
│   ├── Home.jsx         # Ruta "/" — Hero + grilla de productos
│   └── Entities.jsx     # Ruta "/entities" — Tabla de entidades
├── lib/
│   └── utils.js         # Helper cn() para clases
├── App.jsx              # Router principal
├── main.jsx             # Entry point
└── index.css            # Estilos globales + variables Shadcn
```

## ▶️ Pasos para ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/dummydata-react.git
cd dummydata-react

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

## 🌐 Deploy

🔗 **[Ver demo en vivo →](https://dummydata-react.vercel.app)**

Desplegado en **Vercel** con deploy automático desde la rama `main`.

## 🎥 Video demostrativo

📹 **[Ver en YouTube →](https://youtu.be/ENLACE_DEL_VIDEO)**

El video muestra:
- Clonar e instalar el proyecto
- App en funcionamiento (rutas `/` y `/entities`)
- Consumo de la API en tiempo real
- Repositorio y deploy

## 📋 Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero con descripción del proyecto + grilla de productos |
| `/entities` | Tabla con 7 propiedades: título, marca, categoría, precio, rating, descuento y stock |
