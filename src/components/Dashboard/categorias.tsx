import BoxCategoria from './boxCategoria';


interface DashboardProps {
    nome: string;
    quantidade: number;
    valor: number;
}

const Categorias = ({ nome, quantidade, valor }: DashboardProps) => {

    function aplicarCss(nome: string): string {
        let classeCss = '';
      
        switch (nome) {
          case 'Ações':
            classeCss = 'categoria-color-acoes';
            break;
          case 'FII':
            classeCss = 'categoria-color-fii';
            break;
          case 'FIAgro':
            classeCss = 'categoria-color-fiagro';
            break;
          case 'ETF Nacionais':
            classeCss = 'categoria-color-etfn';
            break;
          case 'ETF Internacionais':
            classeCss = 'categoria-color-etfi';
            break;
          case 'Criptomoedas':
            classeCss = 'categoria-color-criptomoedas';
            break;
          case 'Renda Fixa':
            classeCss = 'categoria-color-fixa';
            break;
          case 'Caixa':
            classeCss = 'categoria-color-caixa';
            break;
          default:
            classeCss = '';
        }
      
        return classeCss;
      }
    return (
        <div className='panel p-2 h-50'>
            <BoxCategoria
                nome={nome}
                quantidade={quantidade}
                valor={valor}
                css={aplicarCss(nome)}
            />
        </div>
    )
}

export default Categorias;