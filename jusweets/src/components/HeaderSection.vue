<template>
    <header>
        <!-- <img :src="" alt="" class="" /> -->
        <h1>Ju Sweets</h1>
            <nav>
                <ul>
                    <li><router-link to="/">Início</router-link></li>
                    <li><router-link to="/promocoes">Promoções</router-link></li>
                    <li><router-link to="/cardapio">Cardápio</router-link></li>
                    <li><router-link to="/unidades">Unidades</router-link></li>
                    <li><router-link to="/contato">Contato</router-link></li>
                    <li><router-link to="/carrinho">Carrinho</router-link></li>
                </ul>
            </nav>
    </header>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  
  background-color: #FCE9E9;
  color: rgb(57, 33, 46);
}
nav ul {
  display: flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  font-size: 13px;
}
nav a {
  color: rgb(57, 33, 46);
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  color: #efd9d9;
}
nav a.router-link-active {
  text-decoration: underline;
}
</style>