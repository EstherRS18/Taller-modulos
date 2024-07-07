const productos = {
    alimentos: { Pan: 1.5, Leche: 0.9 },
    bebidas: { Agua: 0.5, Jugo: 1.2 },
    cuidado_personal: { Shampoo: 3.5, Jabón: 2.0 }
  };
  
  let ventas = [];
  
  function calcularDescuento(categoria, cantidad, precio) {
    let descuento = 0;
    if (categoria === 'cuidado_personal') {
      if (cantidad > 15) return 0.15 * precio * cantidad;
      if (cantidad > 10) return 0.10 * precio * cantidad;
      if (cantidad > 4) return 0.05 * precio * cantidad;
    }
    return descuento;
  }
  
  function registrarVenta(nombre, cantidad, categoria) {
    const precio = productos[categoria][nombre];
    const descuento = calcularDescuento(categoria, cantidad, precio);
    const total = precio * cantidad - descuento;
    const hora = new Date().getHours();
    ventas.push({ nombre, cantidad, precio, descuento, total, categoria, hora });
  }
  
  function mostrarVentas() {
    console.log("Ventas realizadas:");
    ventas.forEach(v => console.log(v));
  }
  
  function ingresosPorCategoria() {
    const ingresos = ventas.reduce((acc, v) => {
      acc[v.categoria] = (acc[v.categoria] || 0) + v.total;
      return acc;
    }, {});
    console.log("Ingresos por categoría:", ingresos);
  }
  
  function ventasPorHora() {
    const horas = ventas.reduce((acc, v) => {
      acc[v.hora] = (acc[v.hora] || 0) + 1;
      return acc;
    }, {});
    console.log("Ventas por hora:", horas);
  }
  
  function generarTique() {
    console.log("Tique diario:");
    ventas.forEach(v => {
      const porcentajeDescuento = (v.descuento / (v.precio * v.cantidad)) * 100;
      console.log(`Producto: ${v.nombre}, Cantidad: ${v.cantidad}, Precio: ${v.precio}, Descuento: ${v.descuento}, % Descuento: ${porcentajeDescuento.toFixed(2)}%, Total: ${v.total}`);
    });
  }
  
  registrarVenta('Pan', 3, 'alimentos');
  registrarVenta('Jugo', 2, 'bebidas');
  registrarVenta('Shampoo', 5, 'cuidado_personal');
  
  mostrarVentas();
  ingresosPorCategoria();
  ventasPorHora();
  generarTique();
  