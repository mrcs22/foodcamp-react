export default function DrinkList() {
  return (
    <ul className="options" id="drinks">
      <li>
        <img src="./img/icedTea.jpg" alt="Chá gelado" />
        <div>
          <strong>Chá gelado</strong>
          <p>Copo 500ml</p>
          <p>
            R$ 05,50
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/juice.jpg" alt="Suco" />
        <div>
          <strong>Suco</strong>
          <p>Copo 400ml</p>
          <p>
            R$ 08,50
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/soda.jpg" alt="Refrigerante" />
        <div>
          <strong>Refrigerante</strong>
          <p>Copo 350ml</p>
          <p>
            R$ 04,90
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/wine.jpg" alt="Vinho" />
        <div>
          <strong>Vinho</strong>
          <p>Taça 175ml</p>
          <p>
            R$ 10,90
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
    </ul>
  );
}
