import { HomePage } from "../pages/Homepage";
import { Defaultlayout } from "../components/DefaultLayout";
import { ShopGrid } from "../pages/ShopGrid";
import { ProductPage } from "../pages/ProductPage";


export const publishRoutes = [
    { path: '/', component: HomePage },
    { path: '/shop', component: ShopGrid, Layout: Defaultlayout },
    { path: '/shop/:id', component: ProductPage },
    

    
];

export const privateRoutes = [];