import React, { useEffect, useState } from 'react';
import Text from '../Text';
import { Form } from './styles';

export default function FormProposta() {
  const [valor, setValor] = useState({
    Total: 0,
    CPFL: 0,
    Flora: 0,
    mes: 0,
    ano: 0,
  });

  const handleChange = (e) => {
    const input = e.target.value;
    const mes = input * 0.1;
    const ano = mes * 12;
    const Total = input - mes;
    const CPFL = Total * 0.42;
    const Flora = Total - CPFL;
    setValor({
      Total,
      CPFL,
      Flora,
      mes,
      ano,
    });
  };

  return (
    <Form.Wrapper>
      <Form.ContainerForm>
        <label htmlFor="valor">
          <Text tag="p">Quanto você paga para a CPFL Paulista?</Text>
          <input
            onChange={handleChange}
            id="valor"
            type="text"
            placeholder="R$"
          />
        </label>
      </Form.ContainerForm>
      {/* Calculo */}
      <Form.Container>
        <Form.Result>
          <Text tag="p" variant="bold">Com a solução da Flora</Text>
          <Text tag="p" variant="bold">
            {`R$ ${valor.Total.toFixed(2)}`}
          </Text>
        </Form.Result>
        <Form.Result>
          <Text tag="p">Conta de luz de CPFL Paulista</Text>
          <Text tag="p">
            {`R$ ${valor.CPFL.toFixed(2)}`}
          </Text>
        </Form.Result>
        <Form.Result>
          <Text tag="p">Fatura FLora</Text>
          <Text tag="p">
            {`R$ ${valor.Flora.toFixed(2)}`}
          </Text>
        </Form.Result>
      </Form.Container>

      <Form.Container>
        <Form.Result>
          <Text tag="p" variant="bold">Economia no mês</Text>
          <Text tag="p" variant="bold">
            {`R$ ${valor.ano.toFixed(2)}`}
          </Text>
        </Form.Result>

        <Form.Result>
          <Text tag="p" variant="bold">Economia no ano</Text>
          <Text tag="p" variant="bold">
            {`R$ ${valor.mes.toFixed(2)}`}
          </Text>
        </Form.Result>
      </Form.Container>

    </Form.Wrapper>
  );
}
