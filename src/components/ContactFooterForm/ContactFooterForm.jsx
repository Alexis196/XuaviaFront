import './contact-footer-form.css';
const FormContact = () => {
  return (
    <form className="form-contact">
      <h3>Contacto</h3>
      <fieldset className="campos">
        <label htmlFor="nombre">Nombre</label>
        <input className="campos-input" type="text" id="nombre" placeholder="Ingrese su nombre" required />
      </fieldset>
      <fieldset className="campos">
        <label htmlFor="apellido">Apellido</label>
        <input className="campos-input" type="text" id="apellido" placeholder="Ingrese su apellido" required />
      </fieldset>
      <fieldset className="campos">
        <label htmlFor="email">Email</label>
        <input className="campos-input" type="email" id="email" placeholder="Ingrese su email" required />
      </fieldset>
      <fieldset className="campos">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea className="campos-input" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Ingrese su mensaje" required></textarea>
      </fieldset>
      <input type="submit" className="enviar" />
    </form>
  );
};

export default FormContact;
