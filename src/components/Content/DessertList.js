export default function DessertList() {
  return (
    <ul className="options" id="desserts">
      <li>
        <img src="./img/waffle.jpg" alt="Waffle" />
        <div>
          <strong>Waffle</strong>
          <p>Waffle simples</p>
          <p>
            R$ 10,99
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/pie.jpg" alt="Torta de morango" />
        <div>
          <strong>Torta</strong>
          <p>Torta de morango</p>
          <p>
            R$ 15,00
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/chocolateCake.jpg" alt="Bolo de chocolate" />
        <div>
          <strong>Bolo</strong>
          <p>Bolo de chocolate</p>
          <p>
            R$ 12,50
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="./img/creamCake.jpg" alt="Pavê de cupuaçu" />
        <div>
          <strong>Pavê</strong>
          <p>Pavê de cupuaçu</p>
          <p>
            R$ 14,99
            <ion-icon className="ocult" name="checkmark-circle"></ion-icon>
          </p>
        </div>
      </li>
    </ul>
  );
}
