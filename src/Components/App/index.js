import React, {useState} from "react";
import styles from "./index.module.css";
import Input from "../Input";
import Button from "../Button";
import Table from "../Table";
import Title from '../Title'
import fetchDeclensionWord from '../../api'
import {TABLE_LAYOUT, TABLE_HEADER} from "../Table/const";

export default function App() {

    const [wordInputValue, setWordInputValue] = useState('')
    const [declensionData, setDeclensionData] = useState([])

    const onDeclensionWord = async (word) => {
        const {SINGLE} = await fetchDeclensionWord(word)
        setDeclensionData(
            Object.keys(SINGLE).map((key) => {
                return ({name: key, item: SINGLE[key]})
            })
        )
        setWordInputValue('')
    }

    return (
        <div className={styles.root}>
            <Title>Склонятор</Title>
            <div className={styles.controlLayout}>
                <Input value={wordInputValue}
                       onChange={setWordInputValue}
                       placeholder={"Введите слово"}/>
                <Button onSubmit={() => onDeclensionWord(wordInputValue)}
                        isDisabled={!!wordInputValue}
                > Склонять </Button>
            </div>

            <Table className={styles.root}
                   dataBody={declensionData}
                   dataHeader={TABLE_HEADER}
                   headerLayout={TABLE_LAYOUT}
                   bodyLayout={TABLE_LAYOUT}/>

        </div>
    );
}
