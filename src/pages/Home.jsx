import { useProducts } from '@/hooks/useProducts'
import ProductCard from '@/components/ProductCard'
import { Package, Zap, Database } from 'lucide-react'

export default function Home() {
  const { products, loading, error } = useProducts(30)

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Zap className="w-3 h-3" />
              Powered by DummyJSON API
            </div>
            <h1 className="text-5xl font-extrabold leading-tight mb-4 tracking-tight">
              DummyData
              <br />
              <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Explora productos de prueba consumidos en tiempo real desde la API pública de DummyJSON.
              Navega, filtra y visualiza datos con una interfaz moderna construida en React.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                <span><strong className="text-foreground">{products.length}</strong> productos cargados</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-primary" />
                <span>dummyjson.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Productos</h2>
          {!loading && (
            <span className="text-sm text-muted-foreground">{products.length} resultados</span>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-lg border bg-card animate-pulse">
                <div className="aspect-[4/3] bg-muted rounded-t-lg" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16 text-red-500">
            <p className="text-lg font-medium">Error al cargar productos</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
