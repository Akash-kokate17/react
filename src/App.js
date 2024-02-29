import React, { Suspense } from 'react';
import PureDemo from './Components/PureDemo/PureDemo';
import { PureDemo3 } from './Components/PureDemo/PureDemo3';
import {MemoParent}  from './Components/Memo/MemoParent';
import { ParentMemo } from './Components/Memo/ParentMemo';
import LifeCycleDemo1 from './Components/LifeCycleHooks/LifeCycleDemo1';
import LifeCycleDemo2 from './Components/LifeCycleHooks/LifeCycleDemo2';
import LifeCycleDemo3 from './Components/LifeCycleHooks/LifeCycleDemo3';
import LifeCycleDemo4 from './Components/LifeCycleHooks/LifeCycleDemo4';
import { UseRefDemo } from './Components/Form/UseRefDemo';
import { UseRefDemo2 } from './Components/Form/UseRefDemo2';
import { UseRefDemo3 } from './Components/Form/UseRefDemo3';
import { FormDemo1 } from './Components/Form/FormDemo1';
import { FormDemo2 } from './Components/Form/FormDemo2';
import { FormAssignment1 } from './Components/Form/FormAssignment1';
import FetchDemo from './Components/HttpMethods/FetchDemo';
import AsyncDemo from './Components/HttpMethods/AsyncDemo';
import AxiosDemo1 from './Components/HttpMethods/AxiosDemo1';
import AxiosDemo2 from './Components/HttpMethods/AxiosDemo2';
import AxiosDemo3  from './Components/HttpMethods/AxiosDemo3';
import { AxiosAssignment } from './Components/HttpMethods/AxiosAssignment';
import { myInterceptor1,requestStartedInterceptor, responseReceivedInterceptor } from './utils/MyInterceptor1';
import  ClickCounter  from './Components/HOC/ClickCounter';
import  HoverCounter  from './Components/HOC/HoverCounter';
import { EmpAxios } from './Components/AxiosJsonServerAsi/EmpAxios';
import { Navbar } from './Components/Navbar/Navbar';
import MainC from './Components/Main/MainC.js';

export default function App() {
  // myInterceptor1();
  // requestStartedInterceptor();
  // responseReceivedInterceptor();
  return <>
   <Navbar />
{/* <PureDemo/> */}
  {/* <PureDemo3/> */}
  {/* <MemoParent/> */}
  {/* <ParentMemo/> */}
  {/* <LifeCycleDemo1 counter={5}/> */}
  {/* <LifeCycleDemo2/> */}
  {/* <LifeCycleDemo3/> */}
  {/* <LifeCycleDemo4/> */}
  {/* <UseRefDemo /> */}
  {/* <UseRefDemo2/> */}
  {/* <UseRefDemo3/> */}
  {/* <FormDemo1 /> */}
  {/* <FormDemo2/> */}
  {/* <FormAssignment1/>   */}
  {/* <FetchDemo /> */}
  {/* <AsyncDemo/> */}
  {/* <AxiosDemo1/>*/}
  {/* <AxiosDemo2/> */}
  {/* <AxiosDemo3/>  */}
  {/* <ClickCounter/>
  <HoverCounter/> */}
  {/* <AxiosAssignment /> */}
  {/* <EmpAxios/> */}
  <MainC/>
   </>
}


