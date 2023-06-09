import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <>
      <header className=" px-8 py-4 text-left  container bg-gray-950  border-b  flex justify-between">
        <a className="" href="#">waffle</a>
        <a className=" hover:text-red-600 duration-300" href="#">ONLINE SHOP</a>
        <a href="#">JA</a>
      </header>

        <section className="text-center">
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
        </section>

        <section className="flex m-16 ml-32 h-96">
          <div className="mr-8 w-1/2">
            <img src="https://placehold.jp/600x300.png" alt="ダミー画像" />
          </div>
          <div className="w-1/3">
            <h1 className="text-5xl mb-5 text-left">waffle cake</h1>
            <p className=" text-left text-zinc-400">
              しっとりふわふわに焼き上げたワッフル生地でフルーツやクリームをサンドしました。カラフルな見た目もかわいらしく、スイーツギフトや手土産におすすめです。
            </p>
            <div className="mt-10 ">
              <button className="rounded-3xl border px-10 py-3  text-lg align-top hover:bg-red-500 duration-300">
                詳しく見る
              </button>
              <button className="rounded-3xl border px-3 py-3 ml-8 hover:bg-red-500 duration-300">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/jquery.png" alt="jquery"/>
              </button>
            </div>
          </div>
        </section>

        <section className="flex my-16 ml-32">
          <div className="w-1/3">
            <h1 className="text-5xl mb-5 text-left w-10 tracking-wider ">CORORO waffle</h1>
            <p className=" text-left text-zinc-400">
              シンプルな素材をオリジナルの製法で焼き上げたさくさく食感は、あとを引く美味しさ。ひと口で食べられる気軽さは、自宅でのティータイムやオフィスでの気分転換に最適です。
            </p>
            <div className="mt-10 ">
              <button className="rounded-3xl border px-10 py-3  text-lg align-top hover:bg-red-500 duration-300">
                詳しく見る
              </button>
              <button className="rounded-3xl border px-3 py-3 ml-8 hover:bg-red-500 duration-300">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/jquery.png" alt="jquery"/>
              </button>
            </div>
          </div>
          <div className="ml-32 w-1/2">
            <img src="https://placehold.jp/600x300.png" alt="ダミー画像" />
          </div>
        </section>

        <section className="h-72">

        </section>
        
      <footer>
        <div className="ml-5 space-x-3 text-sm">
          <a  className=" hover:text-red-600 duration-300" href="#">エル・アールについて</a>
          <a  className=" hover:text-red-600 duration-300" href="#">ヒストリー</a>
          <a  className=" hover:text-red-600 duration-300" href="#">製品情報</a>
          <a  className=" hover:text-red-600 duration-300" href="#">店舗情報</a>
          <a  className=" hover:text-red-600 duration-300" href="#">お知らせ</a>
          <a  className=" hover:text-red-600 duration-300" href="#">法人のお客様へ</a>
        </div>
       


      </footer>
      
    </>
  );
}

