const Nav = {
  nav() {
    return /* html */ `
        <nav class='flex items-center justify-between px-4 py-3 mt-2'>
            <div class='logo w-10'>
              <img white="100%" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
            </div>
            <div class="menu">
               <ul class="flex gap-5">
                  <li><a class="font-sans text-black font-normal text-lg" href="/">Home</a></li>
                  <li><a class="font-sans text-black font-normal text-lg" href="/about">About</a></li>
                  <li><a class="font-sans text-black font-normal text-lg" href="/contact">Contact</a></li>
                  <li><a class="font-sans text-black font-normal text-lg" href="/admin/products">Admin</a></li>
               </ul>
            </div>
            <div>
            <ul class="flex gap-5">
            <li><a class="font-sans text-black font-normal text-lg" href="/search">Search</a></li>
            <li><a class="font-sans text-black font-normal text-lg" href="/help">Help</a></li>
            <li><a class="font-sans text-black font-normal text-lg" href="/cart">Card</a></li>
         </ul>
            </div>
        </nav>
        `;
  },
};
export default Nav;
