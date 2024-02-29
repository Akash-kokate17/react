import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../routing/Home.js";
import { About } from "../routing/About.js";
import { Careers } from "../routing/Careers";
import { PermanentJob } from "../routing/PermanentJob.js";
import { ContractJob } from "../routing/ContractJob";
import { ProtectedRoute } from "../routing/ProtectedRoute";
import { UsersDetails } from "../routing/UsersDetails.js";
import { ProductList } from "../routing/ProductList";
import { NotFound } from "../routing/NotFound.js";
const Products = React.lazy(()=> import('../routing/Products.js'))

export default function MainC(props) {
  return <>
     <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/home" element={<Home/>}/>
  <Route exact path="/about" element={<About/>}/>
  <Route path="/careers" element={<Careers />}>
       <Route index element={<PermanentJob/>}/>
        <Route path="permanent" element={<PermanentJob />} />
        <Route path="contract" element={<ContractJob/>}/>
    </Route>
<Route  path="/products" element={<ProtectedRoute>
<Suspense fallback={<div>Loading...</div>}>
    <Products/>
</Suspense>
</ProtectedRoute>}/>
<Route exact path="/userDetail" element={<UsersDetails/>}/>
 <Route exact path="/productList/:id" element={<ProductList/>}/>
  <Route exact path='*' element={<NotFound/>}/>
   </Routes>
  </>;
}
