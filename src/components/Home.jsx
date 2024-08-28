import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div>
      <Header title="Bienvenidos a Pizzería Mamma Mia!" description="Disfruta de nuestras deliciosas pizzas." />
      <div className="container-fluid"> 
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardPizza
              nombre="Napolitana"
              precio={5950}
              ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardPizza
              nombre="Española"
              precio={6950}
              ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardPizza
              nombre="Pepperoni"
              precio={6950}
              ingredientes={["mozzarella", "pepperoni", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
