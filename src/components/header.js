import Nav from "./nav";
const HeaderPage = {
  header() {
    return /*html */ `
        <div class='container mt-4 mx-auto'>
           <div class='flex justify-between py-3 rounded-t-lg   bg-black px-5 items-center'>
               <div class='name-brand text-white font-bold font-sans text-lg' ><h1>Ylasao</h1></div>
               <div class='content-right flex items-center gap-7'>
                <div><h2 class="text-white font-bold font-sans text-lg">Sign in</h2></div>
                <div><h2 class="text-white font-bold font-sans text-lg">Create an Account</h2></div>
               </div>
           </div>
           <div>
              ${Nav.nav()}
           </div>
        </div>`;
  },
};
export default HeaderPage;
