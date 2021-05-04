export default function Content() {
  return (
    <div class="content">
      <strong>Primeiro, seu prato</strong>
      <ul class="options" id="foods">
        <li>
          <img src="./img/salad.jpg" alt="Salada" />
          <div>
            <strong>Salada</strong>
            <p>Folhas frescas</p>
            <p>
              R$ 10,50
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
            </p>
          </div>
        </li>
      </ul>

      <strong>Agora, sua bebida</strong>

      <ul class="options" id="drinks">
        <li>
          <img src="./img/icedTea.jpg" alt="Chá gelado" />
          <div>
            <strong>Chá gelado</strong>
            <p>Copo 500ml</p>
            <p>
              R$ 05,50
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
            </p>
          </div>
        </li>
      </ul>

      <strong>Por fim, sua sobremesa</strong>

      <ul class="options" id="desserts">
        <li>
          <img src="./img/waffle.jpg" alt="Waffle" />
          <div>
            <strong>Waffle</strong>
            <p>Waffle simples</p>
            <p>
              R$ 10,99
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
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
              <ion-icon class="ocult" name="checkmark-circle"></ion-icon>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
