import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import FormProposta from '../../components/FormProposta';
import Menu from '../../components/Menu';
import Text from '../../components/Text';
import { Assinatura } from './styles';

export default function AssinaturaPage() {
  return (
    <Assinatura.Wrapper>
      <Menu />
      <Assinatura.Container>
        <Assinatura.Steps>
          <Text tag="h1">
            Proposta
          </Text>
        </Assinatura.Steps>

        <FormProposta />

        <Assinatura.Termos>
          <Text tag="p" variant="destaque">
            Garantia de economia
          </Text>
          <Text tag="p" variant="aviso">
            {' '}
            Sua conta de luz com a disribuidora somada
            a fatura Flora, será
            {' '}
            <b>sempre menor</b>
            {' '}
            do que a conta de luz atual
          </Text>
          <Text tag="p" variant="destaque">
            Garantia de economia
          </Text>
          <Text tag="p" variant="aviso">
            Basta  dsolicitar seu desligamento com um aviso previo
            de 90 dias.
          </Text>
        </Assinatura.Termos>

        <Assinatura.Buttons>
          <Button>
            <Text tag="p"> Voltar</Text>
          </Button>
          <Button variant="emphasis">
            <Text tag="p"> Avançar</Text>
          </Button>
        </Assinatura.Buttons>
      </Assinatura.Container>
    </Assinatura.Wrapper>

  );
}
