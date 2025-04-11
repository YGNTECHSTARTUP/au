interface PolicyItem {
    title: string
    description: string
    color?: string
  }
  
  interface PolicySectionProps {
    title: string
    description?: string
    items: PolicyItem[]
  }
  
  export default function PolicySection({ title, description, items }: PolicySectionProps) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-black text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-8">{title}</h1>
  
        {description && <p className="text-white mb-8">{description}</p>}
  
        <div className="space-y-10">
          {items.map((item, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide" style={{ color: item.color || "#ffffff" }}>
                {item.title}
              </h2>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  