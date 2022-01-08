import React from "react";
//Helpers
import {calcTime, convertMoney} from '../../helpers'
//Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Tempo de Duração: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Orçamento (em dólares): {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p> Receita (em dólares): {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>

);

export default MovieInfoBar