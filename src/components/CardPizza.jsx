const CardPizza = ({ nombre, precio, ingredientes, img }) => {
  return (
    <div className="card m-3" style={{ flex: '1 0 21%' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: ${precio.toLocaleString()}</p>
        <p className="card-text">Ingredientes: {ingredientes.join(', ')}</p>
        <a href="#" className="btn" style={{ backgroundColor: '#007bff', color: 'white' }}>Ver más</a> 
        <a href="#" className="btn" style={{ backgroundColor: '#28a745', color: 'white', marginLeft: '10px' }}>Añadir</a>
      </div>
    </div>
  );
};

export default CardPizza;