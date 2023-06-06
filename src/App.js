import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <>
      <header className=" px-8 py-4 text-left  container bg-gray-950  border-b  flex justify-between">
        <a href="#">waffle</a>
        <a href="#">ONLINE SHOP</a>
        <a href="#">JA</a>
      </header>
      <div>
        <p class="v-writing text-3xl mt-32 leading-loose tracking-widest">
          エル・アールのワッフルは
          <br />
          「日本のワッフル」です
        </p>
        <div className="mt-10">
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            <br />
            incidunt laboriosam! Expedita saepe facilis cumque neque dolorum
            <br />
            accusamus aut voluptas.
          </h1>
          <div className="my-7">
            <button className=" rounded-3xl border px-5 py-3 mx-5 hover:bg-red-500 duration-300">
            エル・アールについて
            </button>
            <button className="rounded-3xl border px-7 py-3 hover:bg-red-500 duration-300">
              ヒストリー
            </button>
          </div>
        </div>
        <section className="flex m-16">
          <div className="mr-8 w-1/2">
            <img src="https://placehold.jp/600x300.png" alt="ダミー画像" />
          </div>
          <div className="w-1/3">
            <h1 className="text-5xl mb-5 text-left">waffle cake</h1>
            <p className=" text-left">
              しっとりふわふわに焼き上げたワッフル生地でフルーツやクリームをサンドしました。カラフルな見た目もかわいらしく、スイーツギフトや手土産におすすめです。
            </p>
          </div>
        </section>
      </div>
      
    </>
  );
}

