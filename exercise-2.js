//1.nullish coalescing operator

const order = {};

if ((order && order.customer && order.customer.address && !order.customer.address.city) ? ? "Sconosciuto") {
  console.log('City is required');
}
/* quando salvo il file si creano spazi, ho provato su un editor in smartphone e l'output era 

City is required
 */