import { useState } from 'react'
import { useProducts } from '@/hooks/useProducts'
import { Star, TrendingUp, Package, Search } from 'lucide-react'

export default function Entities() {
  const { products, loading, error } = useProducts(100)
  const [query, setQuery] = useState('')

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold mb-2">Entities</h1>
        <p className="text-muted-foreground">
          Listado completo de productos con sus propiedades principales.
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar por nombre o categoría..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-14 rounded-lg bg-muted animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-16 text-red-500">
          <p className="text-lg font-medium">Error al cargar entidades</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <p className="text-xs text-muted-foreground mb-3">{filtered.length} resultados</p>
          <div className="rounded-xl border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">#</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Producto</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Marca</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Categoría</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Precio</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">
                      <span className="flex items-center justify-end gap-1">
                        <Star className="w-3 h-3" /> Rating
                      </span>
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">
                      <span className="flex items-center justify-end gap-1">
                        <TrendingUp className="w-3 h-3" /> Descuento
                      </span>
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">
                      <span className="flex items-center justify-end gap-1">
                        <Package className="w-3 h-3" /> Stock
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-10 text-muted-foreground">
                        No se encontraron productos.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((p, idx) => (
                      <tr
                        key={p.id}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-4 py-3 text-muted-foreground">{idx + 1}</td>
                        <td className="px-4 py-3 font-medium max-w-[200px]">
                          <span className="line-clamp-1">{p.title}</span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{p.brand ?? '—'}</td>
                        <td className="px-4 py-3">
                          <span className="badge-category">{p.category}</span>
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-primary">
                          ${p.price}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="flex items-center justify-end gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {p.rating?.toFixed(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-green-600 font-medium">
                          -{p.discountPercentage?.toFixed(1)}%
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className={p.stock > 10 ? 'text-green-600' : 'text-red-500'}>
                            {p.stock}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </main>
  )
}