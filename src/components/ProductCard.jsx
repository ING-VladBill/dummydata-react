import { Card, CardHeader, CardTitle, CardContent } from './Card'
import { Star, Tag } from 'lucide-react'

export default function ProductCard({ product }) {
  const { title, price, category, thumbnail, rating, stock } = product

  return (
    <Card className="card-hover overflow-hidden flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base line-clamp-2 leading-snug">{title}</CardTitle>
          <span className="text-lg font-bold text-primary shrink-0">${price}</span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 mt-auto">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="badge-category flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {category}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {rating?.toFixed(1)}
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          Stock: <span className={stock > 10 ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>{stock} units</span>
        </div>
      </CardContent>
    </Card>
  )
}
