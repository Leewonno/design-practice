'use client'

import { useEffect, useState } from "react";
import christmas from "/public/css/christmas.module.css";

export default function Christmas(){

    return <>
        <div className={christmas.treeBox}>
            <div>*</div>
            <div>***</div>
            <div>*****</div>
            <div>*******</div>
            <div>*********</div>
            <div>***********</div>
            <div>*************</div>
            <div>***************</div>
            <div>*****************</div>
            <div>*******************</div>
            <div>*****</div>
            <div>*****</div>
            <div>*****</div>
        </div>
    </>
}