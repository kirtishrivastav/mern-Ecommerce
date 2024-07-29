// import MountainIcon from './MountainIcon';
// import CheckIcon from './CheckIcon';
import hero from '../images/cover-img.jpg'

function MainContent() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <img
            alt="Hero Product"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full"
            height="550"
            src={hero}
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Style
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover our curated collection of premium fashion and accessories that will transform your wardrobe.
              </p>
            </div>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-500">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm light:bg-gray-850">
              Featured Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover Our Curated Collection
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Elevate your style with our carefully selected fashion and accessories.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 lg:gap-6">
            <div className="space-y-2">
              <img
                alt="Product 1"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Superstarbrands-Levis-Pepejeans-Min50.jpg"
                width="300"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Leather Backpack</h3>
                <p className="text-white-900 white:text-grey-400">30% Off</p>
              </div>
            </div>

            <div className="space-y-2">
              <img
                alt="Product 2"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Superstarbrands-Ck-Spykar-Min40.jpg"
                width="300"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Silk Scarf</h3>
                <p className="text-white-500 white:text-gray-400">40 % Off</p>
              </div>
            </div>

            <div className="space-y-2">
              <img
                alt="Product 3"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Superstarbrands-Gstar-Brooksbrother-Min40.jpg"
                width="300"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Wool Coat</h3>
                <p className="text-white-500 white:text-gray-400">50% Off</p>
              </div>
            </div>


            {/* <div className="space-y-2">
              <img
                alt="Product 4"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Leather Tote</h3>
                <p className="text-gray-500 dark:text-gray-400">$99.99</p>
              </div>
            </div> */}
            {/* <div className="space-y-2">
              <img
                alt="Product 5"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Cashmere Sweater</h3>
                <p className="text-gray-500 dark:text-gray-400">$179.99</p>
              </div>
            </div>
            <div className="space-y-2">
              <img
                alt="Product 6"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Leather Wallet</h3>
                <p className="text-gray-500 dark:text-gray-400">$49.99</p>
              </div>
            </div> */}

          </div>
        </div>
        
      </section>
     
    </main>
  );
}

export default MainContent;
