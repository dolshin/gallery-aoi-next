import { LinkButton } from '@/components/Button';
import { getSiteTopPath } from '@/features/site/config';

export const HomeHeroSection = () => {
  return (
    <>
      <>
        <section>
          <div>
            <h1>作品を展示する、教室をひらく。</h1>
            <p>
              展示や教室利用を想定したレンタルスペース。
              <br />
              用途に合わせて選べる、3つの空間があります。
            </p>
            <div>
              <LinkButton href={`${getSiteTopPath('aoi')}`}>
                作品を展示したい方はこちら
                <span>↓</span>
              </LinkButton>

              <LinkButton href={`${getSiteTopPath('aoi')}`}>
                教室を開きたい方はこちら
                <span>↓</span>
              </LinkButton>
            </div>
          </div>
        </section>
        <section className="use-case">
          <div className="container">
            <div id="exhibition" className="use-case-item">
              <h2>作品を展示したい方へ</h2>
              <p>
                個展やグループ展など、作品を静かに見せるための空間をご用意しています。
              </p>
              <a href="#spaces">展示向きのスペースを見る</a>
            </div>

            <div id="classroom" className="use-case-item">
              <h2>教室を開きたい方へ</h2>
              <p>
                日本画・絵画教室など、少人数での教室利用に適した空間があります。
              </p>
              <a href="#spaces">教室向きのスペースを見る</a>
            </div>
          </div>
        </section>
        <section id="spaces" className="spaces">
          <div className="container">
            <h2>スペース一覧</h2>

            <div className="space-list">
              <div className="space-item">
                <h3>ギャラリー葵</h3>
                <p>展示・レンタルギャラリー</p>
                <a href="/space/aoi">詳しく見る</a>
              </div>

              <div className="space-item">
                <h3>桃花庵</h3>
                <p>日本画・絵画教室</p>
                <a href="/space/touka-an">詳しく見る</a>
              </div>

              <div className="space-item">
                <h3>ヴェルザ</h3>
                <p>準備中</p>
              </div>
            </div>
          </div>
        </section>
      </>
      <footer>
        <div className="container">
          <div>
            <h4>ギャラリー葵 AOI</h4>
            <p>
              ギャラリー葵は、展示や教室に使える
              <br />
              3つのレンタルスペースを運営しています。
            </p>
          </div>

          <div>
            <h4>運営スペース</h4>
            <ul>
              <li>
                <a href="/space/aoi">ギャラリー葵</a>
              </li>
              <li>
                <a href="/space/touka-an">桃花庵</a>
              </li>
              <li>ヴェルザ</li>
            </ul>
          </div>

          <div>
            <h4>Follow</h4>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">© 2026 Gallery AOI</div>
      </footer>
    </>
  );
};
