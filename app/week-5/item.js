
export default function Item({ name, quantity, category }) {
    return (
      <section className="p-4 m-4 bg-slate-800 max-w-sm">
        <h2  className="text-xl font-bold text-white ">{name}</h2>
        <p className="text-sm text-white">buy {quantity} in {category}</p>
      </section>
      
    );
  }
  