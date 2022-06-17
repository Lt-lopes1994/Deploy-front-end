export default function transformCoinToStr(coins) {
    const reais = coins.toString().split("");
    reais.splice(-2, 0, ",");
    return "R$ " + reais.join("");
}
