import React from "react";

const ChefifyComponent = () => {
  return (
    <div className="text-[12px] font-sans">
      <header className="flex justify-between items-center border-b border-[#efefef] px-2 py-1 text-[#646464]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAACsrKzv7+/q6uqjo6NgYGC5ubnPz89XV1eoqKgoKCjMzMwsLCzJycmIiIj5+fnk5OR3d3dBQUHBwcFLS0tRUVGCgoLb29s8PDyOjo5GRkbY2Nju7u5oaGiTk5MzMzMaGhqbm5txcXEPDw8fHx90dHQ3Nzdra2v2X0xAAAAJkUlEQVR4nO2d2WKqMBCGDe7WIlqt1rprl/d/wmNICFkGCQFK8Mx/ZWOg+cgykyGJnQ4KhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUJ5qDW57ZouQ636IISsmi5EjYpeyHMTdkmsYdPlqE1zBjhruhy1accAr02XozaFDHDQdDlq05ABfjZdjtrUZ4CnpsvxWPOe86VbBniOKixO5erd6Di4d7p2wQBJV0v0y7v5YoVcO1x64IByG4hO94T3qgpXhZYk0ajope/8wo2U1j0T3wgXgpBsi135AzyZHksKKy1iSa1SQjIucF3EWzdZSokblnSpupClJBOSN+vL9sklgZQ4cu/SNepAXBDnyQVydfEu/VtHMUtoRhwQd0l2ubqC4k39TzQkxRHDJLNcXReW5J/7tieFEcVDkauLt4XX+krqrJ+iiH0o45Ul3RT37eqHd9PXCXMQt0k2ubrGPE123+LQhg+9MjIIHyKKByJX1ydPk923PfV3/Zg2HoogjkSetLqiV54ku2/cnkxrLLi1NiZhNqLIkVZX90ZMGm5P+nUW3F5jkzAL8Zh8n44gvSRJDrVxe1LQ061NUCXCiKLPrs2LJ1I+bk8WdZfcWkBPhBHTcffIU6Z6gpTNi1GGqQsRQoiS7WREYnYpu2/cnng1SbyAiIYDphgWijhJ/pDdNz7j/Pm74tvoxQoxVL7dpuOOXF0DlvT1l8W3EDjYGIhaVYuppdyek9CGd9E3uJ1qiGs404uUJemp7gHK2vRhgfgN50mrS4Q25n9e/nwB7qmBuABzpO6bMP6Fw3Z/oilYfAVxBn2fVpcIbSyB2/ugI1R+BdGcaMmGUIQ2AujuXgh0bWREsJoT31MYf79iiapOeYjgtwxRhDY8iyWqyhptBCI0C2GIogF7/irYCEtpiHpgTiCKMciHqMVDZfg24hVoxrdv4kOThbfTLoOBzf4GWQ+Ay8dYoqERWHRmAPIAb945o6CgWrQDVF8FeyyzL1oC+uiMwpprJbcE3OTc1iexV9XFAM8ezpceSZpL2QH6E1az1fUx4Jv657hNLTTR5BFg2Nmtk0g3+dq2Z4hRtHsESLWfDvvBcNQWEwFpnAHo6wTXQSwY8cSATP8nYNQOB9RKcA2+fTRcrOoEA376uKjEQeFbNiBFPExybuC7gMCaBBjL37ChjTIB5aV+bUa0AmwzYmgH2F5Ea8C2ImYCQkGcNiJmA4IB1fYhPgJ8CkQAUIlkA2+o2oUIACqvW8C3jG1CBAGVYL05nLYKMR+w5Yg2gK1GtANsMaItYGsR7QEzEH2fLxYBbCViMcB0hV5rEIsCtg6xOGDLEF0AW4XoBtgiRFfA1iC6A7YEsQxgKxDLAbYAsSyg94jlAT1HrALQa8RqAD1GBJdtOy2gBBGbny/qy9fcATMQG98hC+2ScV4CC64Ar7K0DoLWkZZY4wshNnxEHbCXq9QiZgCx4eV85ka0kqu0TcSGd5Ea27RKL0M3EBsm1FtpBevsdcSGt89sKgc0EJteIPZeOaCGeK7mnu7aVw+oIjZ/ckvq1FS4szxdRtV0G+10lr/JAy+1Y3C5eCXkYyGOaOO7v8bS2v3d7O4/vf7+uaNKV3JvwklQatPu/CwaOj96MbazS2ltdJS23Fo81e7w8jv++ToNZkNtwTk9m8vtQMhUsuvH15zGn+XNF1KWGs7iCxT3+kU5LiYg5bfNx+1xuu9uLsL4xf9JenK0Bl+Hve48eKl+cAVcT+kIkgoI6c5RfkBylEDRxi85pNTsJms5qt61sEm2/68W69n6wPdH3MS/qYDw834/I3HXlxvjsYKWkiE+ps2EVdoHJ6W7V0BI8s+4HtS275K1UC1YMo1HPv5HeUK6MzrPBPzUtfk5PsTw3VxSf033QZYnpCf35M1yX2qaJsZu9Tf0zUVAtZuQtsZDTp5qWmmeb/ZaDyHthKe8TIIwGq7HH6f3734Gby9YD1bvh6Nir7ez2Yy6LwP64S7RH+f3gZuNbsE9eXsfwj94lm24WC8gixEs1kWnkrSN5hofTtiVJvsrYDowTdfmk23asXVDK1rMVDTdq54nyug6pPDJbkFWJwQIA7UQ+rOMtEmt6HaZhKNswjjFHP36YOpDrax6GGWL4sWUX4tjcJmxA5DUM3LZmTofl+EoDFhdJw87mEwmtGgH+uEu0R9TwvCeHJzvczOeZRIPgMeOrlvhrkobg8XGJEpIAQ9Je57H9SWb0Pggt0/FC5LbU0SA1xMpYaxX5awM+uz1C+ixLwX9OdoTLI5kDLR21+EzH6nBvGo9pEtPPUsHnC70jzTCF4WQvgvSfYS34ueF0MZjMRNjhOqEZqWUuW8OATe5EooT0jPutZPc6ASs6BSV1oTF7twAGFnkmUA8muiHlWzkhulAGBhP/+DguH7bjU0BAfJ9SHUUBwGgmyefHQjpU1MCxTZ+kaEr0J0BBQTwe7ZSt19BA9ZGwnYhPGrjysyusKoW9nVozAzonCsx+wSMUUlULoR0/JVtA/xPcjSzMocxodHFwzRxAw8Bg7SELoTa858Ut/a86BbBygCyQ6N0JKB26n2g6yAZOCfCuVJrN6e3GzvQczAEzi0kwoxjryR3wokwDk0ln5d2zc0QsXpnkEe4rIlQzuBg7WMdiM1LgzzCae5d3Aipp8QtYEZXz9dSNzqg8gh70FiryJFwKP7Hr/MvRX3ZjDV5hB3IXipyJKQ3HifXO65mGELuiq5cwly76kp44aP41sXac1EPOs/byyWknx8O5a6EidWHLrdVPLE7QRXwLlpvLmHspD4aCFwJ47lBFBfgwd1zxI7OM4rXPaXzpXzCOCapOQVr6aR1Z8JebPVv5X4Vklmzq4rAAuH8j3xCll8eC6KBPGN0JqSu342WsNTbPf5qbzBMKEbsCM6XhzFvlZAtuvlJGnYvjuqkr8TdCXnh8kK6OYrEnuTT5+rtzD+nLxFsCJNtvz+H7+uAvb2SyutOyJcNll7LIIc6mT6le1oRdjba0bsyUQnCuBNVcY7PTl69dt4qM/YJREhdNe1d9DRdXnFSefYEmNxNVcJbxu8E0zZV0WqNXtg/brfHfqiHbnrhNDTsSfeeaMZ4dsP+8TIxv7hnNp5RpN5hFIZgW/yFXq4+k2gD92EleH0q47C1QtRv8+VnduqRZbCsdRolUDTe9ZQ/453Yh4A8aS+kTfP2vf4lgEP/HBK/LFSFv+an5omn/PuMowzXNOgHpieFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUKhn0D/MbGZLyYpsbwAAAABJRU5ErkJggg=="
              alt="logo"
              className="aspect-square h-[50px]"
            />
            <h1 className="text-[#f54985] m-0">Chefify</h1>
          </div>
          <input
            type="text"
            placeholder="cakescascsa"
            className="bg-[#efefef] px-4 py-2 rounded-lg border-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 p-0">
            <li className="list-none">What to cook</li>
            <li className="list-none">Recipes</li>
            <li className="list-none">Ingredients</li>
            <li className="list-none">Occasions</li>
            <li className="list-none">About Us</li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-[#efafc9] bg-[#ffeff5] rounded-lg px-4 py-2 text-base cursor-pointer border-none">
              <img
                src="https://media.istockphoto.com/id/1352409935/vector/delivery-box-with-plus-sign-line-icon-add-to-cart-symbol-online-shopping-ordering-concept.jpg?s=170667a&w=0&k=20&c=AohTF-j59lSGuDsooXF6R1tLjcFwLUidRl9Cq16-49k="
                alt=""
                className="aspect-square w-6"
              />
              Your Recipe Box
            </button>
            <img
              src="https://api.dicebear.com/7.x/pixel-art/svg"
              alt="avatar"
              className="h-9 aspect-square bg-[#ffeff5] rounded-full"
            />
          </div>
        </div>
      </header>

      <main className="mt-8 flex">
        <div className="sub-menu"></div>
        <div className="main">
          <div className="review">
            <p>Emma Gonzelez's Recipe Box</p>
            <div className="menu grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i}>
                  <img src="" alt="" className="food" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </main>

      <footer></footer>
    </div>
  );
};

export default ChefifyComponent;