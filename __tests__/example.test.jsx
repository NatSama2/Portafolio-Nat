function sum(a, b) {
  return a + b;
}

// Definimos el test
test('Suma dos números', () => {
  // Ejecutamos la función que deseamos probar
  const result = sum(2, 3);
  
  // Verificamos si el resultado es el esperado
  expect(result).toBe(5);
});