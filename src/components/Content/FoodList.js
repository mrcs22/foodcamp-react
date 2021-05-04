export default function FoodList() {
  return (
    <ul className="options" id="foods">
      <li>
        <img src="./img/salad.jpg" alt="Salada" />
        <div>
          <strong>Salada</strong>
          <p>Folhas frescas</p>
          <p>
            R$ 10,50
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/salmon.jpg" alt="Salmão" />
        <div>
          <strong>Salmão</strong>
          <p>Peixe com salada</p>
          <p>
            R$ 24,99
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/vegetableSkewer.jpg" alt="Espetinho de legumes" />
        <div>
          <strong>Espetinho de legumes</strong>
          <p>Legumes assados</p>
          <p>
            R$ 14,99
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/spaghetti.jpg" alt="Macarrão" />
        <div>
          <strong>Macarrão</strong>
          <p>Massa ao molho de tomate</p>
          <p>
            R$ 15,00
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
    </ul>
  );
}
