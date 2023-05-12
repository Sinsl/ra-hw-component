import './App.css';
import item from '../item';
import ShopItemFunc from '../ShopItemFunc/ShopItemFunc';
import ShopItemClass from '../ShopItemClass/ShopItemClass';
import Calendar from '../Calendar/Calendar';

function App() {
  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к блоку "Компоненты"</h1>
      </header>
      <div className='task task-1'>
        <header className='header-task'>
          <h2>Задание 1</h2>
        </header>
        <div className="container">
          <div className="background-element"></div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <ShopItemFunc item={item} />
          </div>
        </div>
      </div>
      <div className='task task-2'>
        <header className='header-task'>
          <h2>Задание 2</h2>
        </header>
        <div className="container">
          <div className="background-element"></div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <ShopItemClass item={item} />
          </div>
        </div>
      </div>
      <div className='task task-3'>
        <header className='header-task'>
          <h2>Задание 3</h2>
        </header>
        <Calendar dateNow={Date.now()}/>
      </div>
    </div>
  );
}

export default App;
