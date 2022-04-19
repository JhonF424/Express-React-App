// import logo from './logo.svg';
import { Alert, Card, DatePicker, Moment, TimePicker } from 'antd';
import './App.css';

function App() {
  return (
    <div class="container">
      <h1 className="">Componentes con Antd Design</h1>
      <span className=''>Programación 3</span>
      {/* Alerts */}
      <div>
        <Alert message='Success Text' type='success' />
        <Alert message='Info Text' type='info' />
        <Alert message='Warning Text' type='warning' />
        <Alert message='Error Text' type='error' />
      </div>
      <div>
        <label>Selecciona una fecha</label>
        <DatePicker onChange={Date}></DatePicker>
        <TimePicker></TimePicker>
      </div>
      <div>
        <Card
          size='small'
          title='Tarjeta de presentación'
          extra={<a href='#'>Ver más...</a>}
          className='w-1/3 text-center'
          style={{/*{width: 300}*/ }}>
          <p>John Franco</p>
          <p>Estudiante de Ing de Software</p>
          <p><small>
            jhon.1702011356@ucaldas.edu.co
          </small></p>
        </Card>
      </div>
    </div>
  );
}

export default App;
