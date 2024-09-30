import { CSSProperties, useContext } from 'react';
import AntDialog from '../dialog/dialog';
import { Divider, Typography } from 'antd';

interface ShowModalConfidentialTermProps {
    show: boolean,
    toggleShow: () => void,
}

export default function ModalConfidentialTerm ({ show, toggleShow }: ShowModalConfidentialTermProps) {

    const titlesSharedStyle: CSSProperties = {
        fontSize: '28px',
        margin: '20px 0px',
        width: '100%',
        textAlign: 'center'
    }

    return (
        <AntDialog modalProps={{ style: { minWidth: '76vw' } }} open={show} setOpen={toggleShow}>
            <AntDialog.Header>
                <Divider style={{ borderColor: 'grey' }}>TERMOS E CONDIÇÕES DE USO</Divider>
            </AntDialog.Header>
            <AntDialog.Body>
                <div style={{ overflowX: 'hidden', height: '58vh' }}>
                    <Typography>
                        Este termo de uso de plataforma de gestão integrada para Financiamentos da Inovação (“Termo de Uso”) regulamenta a
                        utilização da plataforma digital para gestão do(s) serviço(s) executado(s) pela F. INICIATIVAS CONSULTORIA E ASSESSORIA
                        EMPRESARIAL LTDA., empresa com sede na Cidade e Estado de São Paulo, na Avenida Paulista, 568, 7º andar, Jardim Paulista,
                        CEP 01310-000, inscrita no CNPJ/MF sob o nº 13.773.581/0001-46, doravante denominada simplesmente “FI GROUP”. No ato de
                        adesão à Plataforma, o usuário (doravante “Usuário”) se obriga a aceitar, plenamente e sem reservas, todos os termos
                        e condições deste Termo de Uso:
                    </Typography>
                    <br />
                    <Typography>I.Ler atentamente e concordar com os termos descritos abaixo; </Typography>
                    <br />
                    <Typography>O possível desconhecimento deste termo não isenta o Usuário de suas responsabilidades.</Typography>
                    <br />
                    <Typography>Ao fazer uso da Solução Digital Financiamento, o Usuário concorda que leu, entendeu e aceitou os termos, as regras e as condições de uso aqui dispostos. </Typography>
                    <Typography>
                        O Usuário fica ciente e concorda que este Termo de Uso poderá ser alterado pelo FI GROUP, a qualquer tempo, devendo o FI GROUP comunicar o Usuário pela plataforma.
                        O usuário poderá, a qualquer momento, acessar a versão atualizada deste Termo de Uso na respectiva Plataforma.
                    </Typography>
                    <Typography>
                        A Plataforma está disponível para aqueles com capacidade civil para utilizá-la e que possuam algum tipo de vínculo com o FI GROUP.
                        Caso o Usuário não possua capacidade civil para utilizar a Plataforma, consideram-se estendidas todas as declarações do presente
                        Termo de Uso ao  seu responsável legal.
                    </Typography>

                    <Typography style={{ ...titlesSharedStyle }}>DEFINIÇÕES</Typography>
                    <Typography>
                        1. Para os efeitos deste Termo os vocábulos e expressões abaixo têm as seguintes definições:
                    </Typography>
                    <Typography className="paragraph">
                        1.1.	Documentação: significa a documentação referente aos Produtos e/ou Serviços acessível através da plataforma.
                        <br />
                        1.2. Serviços: Significa o serviço que o CLIENTE contratou para obter a gestão através da plataforma.
                        <br />
                        1.3. Licença: significa o direito de uso do Software, conforme os Termos aqui disposto.
                        <br />
                        1.4. Software: significa a plataforma online propriedade do FI GROUP e cuja utilização é atribuída ao CLIENTE em virtude das disposições do Contrato estabelecido entre as Partes.
                        <br />
                        1.5. Usuário: significa aquele indivíduo integrante da empresa Cliente que está autorizado a usar o Software, em virtude do contrato de prestação de serviços assinado entre o CLIENTE e FI GROUP.
                        <br />
                        1.6. Partes: significa o CLIENTE e FI GROUP em conjunto.
                        <br />
                        1.7. Cliente: significa a pessoa jurídica por meio de seu representante que aceitou e assinou o contrato de prestação de serviços com o FI GROUP.
                        <br />
                    </Typography>


                    <br />
                    <Typography style={titlesSharedStyle}>DESTINAÇÃO DA PLATAFORMA</Typography>
                    <Typography className="paragraph">
                        Constitui objeto do presente Termo o licenciamento de uso da plataforma de gestão integrada, sem exclusividade, com a finalidade a
                        utilização do Sistema de propriedade do FI GROUP, pelo prazo avençado entre as Partes para a gestão do(s) serviço(s) executados pelo FI GROUP.
                    </Typography>
                    <br />
                    <Typography style={titlesSharedStyle}>CADASTRO</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            3.1	O Usuário declara e se responsabiliza pela veracidade e atualização de todos os dados por ele fornecidos à Plataforma no momento de
                            seu Cadastro e em qualquer atualização posterior.
                        </Typography>
                        <Typography className="paragraph">
                            3.1.1	Ao se cadastrar, o Usuário deverá informar dados verdadeiros, que serão de sua exclusiva responsabilidade.
                            O FI GROUP não se responsabiliza por dados falsos inseridos no cadastro.
                        </Typography>
                        <Typography className="paragraph">
                            Alterações no cadastro poderão ser feitas pelo Usuário através do seguinte e-mail: suporte.appleidobem@fi-group.com
                        </Typography>
                        <Typography className="paragraph">
                            3.1.3	Somente será permitido um único Cadastro por Usuário, sendo necessário para sua efetivação o preenchimento de todos os campos exigidos no
                            respectivo formulário de Cadastro de Usuário disponível na Plataforma.
                        </Typography>
                        <Typography>
                            3.2	No momento do Cadastro, o Usuário deverá escolher uma senha pessoal que deve ser intransferível, por meio da qual ele terá acesso à Plataforma,
                            comprometendo¬-se a não informa-la a terceiros, responsabilizando-¬se exclusiva e pessoalmente pelo seu uso.
                        </Typography>
                        <Typography>
                            3.3	O Usuário é responsável por seu login e senha de acesso. Em caso de perda ou roubo da senha de acesso, deve comunicar imediatamente ao FI GROUP,
                            através do canal suporte.appleidobem@fi-group.com
                        </Typography>
                        <Typography>
                            3.4	O usuário reconhece, ainda, que este Termo de Uso deve ser observado e fielmente cumprido, sob pena de cancelamento ou
                            bloqueio de utilização da Plataforma e demais medidas cabíveis, caso o mencionado Termo de Uso for violado ou descumprido.
                        </Typography>
                        <Typography>
                            3.5	Uma vez cadastrado, o Usuário poderá, a qualquer tempo, por meio de Plataforma, revisar, ou solicitar alteração ou o
                            cancelamento de suas informações de cadastro através do e-mail suporte.appleidobem@fi-group.com
                        </Typography>
                        <Typography>
                            3.6	O FI GROUP se reserva ao direito de:
                        </Typography>
                        <Typography className="paragraph">
                            <Typography>
                                I.	Conferir os dados informados pelo Usuário no Cadastro da Plataforma, podendo solicitar dados e/ou documentos adicionais
                                caso estes demonstrem serem necessários para o cumprimento da finalidade ora estabelecida;
                            </Typography>
                            <Typography>
                                II.	Cancelar ou bloquear os Cadastros de Usuários quando finda a execução do serviço cuja gestão foi feita pela plataforma.
                            </Typography>
                            <Typography>
                                III.	Cancelar ou bloquear os Cadastros de Usuários que estejam com informações que violem este Termo de Uso ou identificada possibilidade mal uso do Usuário.
                            </Typography>
                        </Typography>
                    </Typography>

                    <br />
                    <Typography style={titlesSharedStyle}>CONDIÇÕES DE USO DA PLATAFORMA</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            4.1	Ao utilizar a Plataforma, o Usuário se compromete a observar o Termo de Uso, as normas e regulamentos das Empresas,
                            a lei, a utilizar termos aceitáveis socialmente, e a não desrespeitar a ordem pública.
                        </Typography>
                        <Typography>
                            4.2	O Usuário não deverá utilizar a Plataforma para a prática de atos proibidos pela lei e pelo presente Termo de Uso, ou atos que possam danificar,
                            inutilizar, sobrecarregar ou deteriorar a Plataforma, os equipamentos informáticos de outros usuários (hardware e software), assim como os documentos,
                            arquivos e toda classe de conteúdos armazenados nos seus equipamentos informáticos (cracking) ou impedir a normal utilização da referida ferramenta,
                            equipamentos informáticos e documentos, arquivos e conteúdos por parte dos demais usuários.
                        </Typography>
                    </Typography>


                    <br />
                    <Typography style={titlesSharedStyle}>EXCLUSÃO DE GARANTIAS E DE RESPONSABILIDADE</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            5.1	O FI GROUP não se responsabiliza por perdas e danos causados pela utilização irregular da plataforma, nem por falhas relacionadas
                            a infraestrutura do Usuário, que deverá ser adequada aos equipamentos utilizados para acesso aos serviços, excluindo de sua responsabilidade,
                            ainda, na ocorrência de caso fortuito e força maior.
                        </Typography>
                        <Typography>
                            5.2	Também não são de responsabilidade do FI GROUP quaisquer perdas e danos suportados por usuários do Usuário em função de problemas software,
                            hardware, sistemas, e aplicativos do Usuário, fornecidos por terceiros, bem como perdas de dados, invasões, vírus, e qualquer outro evento que
                            fuja ao controle e diligência do FI GROUP.
                        </Typography>
                        <Typography>
                            5.3	O FI GROUP possui todos os níveis de segurança exigidos pela legislação vigente, a fim de resguardar todos dados e informações inseridos na Plataforma,
                            motivo pelo qual se exime de toda e qualquer responsabilidade pelos danos e prejuízos de qualquer natureza que possam decorrer do acesso, interceptação,
                            eliminação, alteração, modificação, utilização ou manipulação, por terceiros não autorizados, dos arquivos e comunicações transmitidos através do Plataforma.
                        </Typography>
                        <Typography>
                            5.4	Na extensão máxima permitida pela lei em vigor, a Plataforma é fornecida &quot;no estado em que se encontra&quot; e &quot;conforme a disponibilidade&quot;, com todas as
                            falhas e sem garantia de qualquer espécie.
                        </Typography>
                        <Typography>
                            5.5	O FI GROUP não garante que as funções contidas no Software atendam a todas as necessidades do Usuário, que a operação do Software será ininterrupta
                            e/ou livre de erros, que qualquer serviço continuará disponível, que os defeitos no Software serão corrigidos ou que o Software será compatível ou
                            funcione com qualquer software, aplicações ou serviços de terceiros. O FI GROUP utilizará seus melhores esforços para corrigir eventuais falhas e erros
                            no funcionamento do Software, podendo à seu critério, substituir a cópia dos programas com falhas por cópias corrigidas. Contudo o FI GROUP não pode garantir
                            um prazo para tais reparos. Os erros no funcionamento serão corrigidos durante o período que for necessário e o FI GROUP não se responsabiliza por danos
                            decorrentes da não disponibilidade.
                        </Typography>
                        <Typography>
                            5.6	Em nenhum caso o FI GROUP será responsável por danos pessoais e/ou qualquer prejuízo incidental, especial, indireto ou consequente, incluindo,
                            sem limitação, prejuízos por perda de lucro, corrupção ou perda de dados, falha de transmissão e/ou recepção de dados, não continuidade do negócio
                            ou qualquer outro prejuízo e/ou perda comercial, decorrentes ou relacionados à perda de informações ou inabilidade em usar o Sistema, por qualquer
                            outro motivo. O FI GROUP tampouco se responsabiliza por qualquer dano, prejuízo e/ou perda no equipamento do usuários causados por falhas no sistema,
                            no servidor ou na conexão à Internet, ainda que decorrentes de condutas de terceiros, inclusive por ações de Softwares maliciosos como vírus, malware,
                            e outros que possam, de algum modo, danificar o equipamento ou a conexão dos Usuários em decorrência do acesso, utilização e/ou navegação do FI GROUP,
                            bem como a transferência de dados, arquivos, imagens, textos, áudios e/ou vídeos contidos no mesmo. O Usuário reconhece e concorda que, para que grande
                            parte de seus Serviços sejam oferecidos gratuitamente, o FI GROUP considerou os riscos envolvidos e a avaliação de viabilidade econômica dos Serviços.
                        </Typography>
                    </Typography>
                    <br />
                    <Typography style={titlesSharedStyle}>DIREITOS DE PROPRIEDADE INDUSTRIAL E INTELECTUAL</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            6.1	Pertencem exclusivamente ao FI GROUP os direitos de propriedade industrial e intelectual sobre quaisquer produtos licenciados através do FI GROUP,
                            cujo uso será permitido à CONTRATATE, de acordo com os termos deste contrato. Assim como, todos os direitos de propriedade industrial e intelectual
                            sobre o Software, bem como qualquer extensão, melhoria ou modificação do Sistema, são de propriedade exclusiva do FI GROUP.
                        </Typography>
                        <Typography className="paragraph">
                            6.1.1 Inclui-se na determinação da cláusula 6.1 quaisquer aprimoramentos, correções, traduções, alterações, novas versões ou obras derivadas, realizadas pelo FI GROUP,
                            isoladamente ou em conjunto com o Usuário ou ainda qualquer terceiro.
                        </Typography>
                        <Typography>
                            6.2	O Software, objeto do presente contrato é de titularidade e propriedade do FI GROUP, de forma que os direitos autorais e outros direitos de propriedade intelectual
                            relativos ao mesmo são iguais aos conferidos às obras literárias nos moldes da legislação de direitos autorais vigente no país, conforme expressa determinação do artigo
                            2º e Parágrafos da Lei 9.609/98.
                        </Typography>
                        <Typography>
                            6.3 O Usuário se absterá de utilizar ou registrar em seu nome, quaisquer patentes, marcas, registrados ou outros sinais distintivos dos quais o FI GROUP
                            é o proprietário e não poderá modificar, reproduzir, distribuir ou comunicar publicamente ou disponibilizar o Software a terceiros, exceto conforme estabelecido
                            neste Contrato ou no caso de ter com a autorização prévia do FI GROUP.
                        </Typography>
                        <Typography>
                            6.4 A utilização do Sistema do FI GROUP caso disponibilizado, é cedida ao Usuário em caráter temporário, no período de vigência do presente Contrato,
                            podendo ser revogada a qualquer tempo, sem a necessidade comunicação prévia, ao exclusivo critério do FI GROUP.
                        </Typography>
                        <Typography>
                            6.5	A utilização do Sistema do FI GROUP, caso disponibilizado, não confere, em qualquer hipótese, direito de propriedade sobre o software. A utilização do sistema
                            tem por finalidade a efetiva e real prestação dos serviços constantes na cláusula 2ª.
                        </Typography>
                        <Typography>
                            6.6	É vedado qualquer procedimento que implique engenharia reversa, descompilação, desmontagem, tradução, adaptação e/ou modificação do Sistema, ou qualquer
                            outra conduta que possibilite o acesso ao código fonte do Sistema, bem como qualquer alteração não autorizada do Sistema ou de suas funcionalidades.
                            Da mesma forma, o Usuário compromete-se, no âmbito da boa-fé contratual, a denunciar pronta e eficientemente qualquer infração ou intenção fundamentado
                            de infração do Software por terceiros, que possa afetar os legítimos interesses do FI GROUP, de que o Usuário possa ter conhecimento.
                        </Typography>
                        <Typography>
                            6.7	O Usuário manterá todos os direitos de propriedade intelectual de que seja titular das informações e conteúdo que possa armazenar por meio do Software
                            no âmbito de seu uso nos termos deste instrumento. Consequentemente, em virtude deste Acordo, o Usuário não transfere a propriedade para o FI GROUP ou
                            qualquer terceiro, nem concede licença ou direito de uso que não seja aquele previsto neste instrumento, ou de qualquer outro tipo em relação a qualquer
                            informação, conteúdo ou qualquer direito de propriedade intelectual.
                        </Typography>
                        <Typography>
                            6.8	O Usuário não poderá, direta ou indiretamente, inclusive através de atos de seus prepostos, copiar, modificar, transferir, sublicenciar, ceder,
                            vender, dar em locação, dar em garantia, doar, ou alienar a terceiros os produtos e serviços a que tiver acesso através da Plataforma, sob qualquer
                            forma ou modalidade, gratuita ou onerosa, provisória ou permanente, no todo ou em parte, nem submetê-los a processos de engenharia reversa ou, ainda,
                            traduzi-lo ou decodificá-lo, no todo ou em parte. As mesmas vedações aplicam-se a quaisquer documentações ou informações relativas ao objeto do presente
                            contrato.
                        </Typography>
                        <Typography>
                            6.9	Desde que previamente aprovado pelo Usuário através de manifestação expressa, o FI GROUP pode citar o nome e marca do deste, como fonte de referência
                            e/ou cliente de seus Serviços e Produtos, inclusive em sua publicidade, independentemente de qualquer pagamento adicional.
                        </Typography>
                        <Typography>
                            6.10 Os nomes, marcas e logotipos do FI GROUP ou de qualquer outro terceiro, contidas nos serviços e produtos, e qualquer documentação que os acompanhe,
                            não poderão ser adulterados ou modificados, bem como não poderão ser objeto de venda, licenciamento, doação, locação ou qualquer forma de transferência
                            ou transmissão, onerosa ou gratuita, permanente ou temporária.
                        </Typography>
                    </Typography>

                    <br />
                    <Typography style={titlesSharedStyle}>LICENCIAMENTO DOS SISTEMAS</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            7.1.  A utilização da plataforma é concedida em favor do CLIENTE e Usuários de forma gratuita, não exclusiva, não transferível, não sublicenciável,
                            para uso exclusivo no território brasileiro e por um período igual à duração do Contrato de prestação de serviços, o qual a gestão é realizada pela plataforma.
                        </Typography>
                        <Typography>
                            7.2. O direito ao uso do Sistema será concedido ao CLIENTE com acesso aos Usuários por prazo determinado, para uso exclusivo do Usuário no servidor em nuvem
                            Microsoft Azure, de acordo com as condições estipuladas neste Termo, observados os limites e características do ambiente operacional do CLIENTE, a quem é vedado:
                        </Typography>
                        <Typography className="paragraph">
                            <Typography>
                                7.2.1 Ceder, sublicenciar, vender, arrendar, dar em locação ou em garantia, doar, alienar de qualquer forma, transferir, total ou parcialmente,
                                sob quaisquer modalidades, gratuita ou onerosamente, provisória ou permanentemente, a quaisquer terceiros, sem a prévia e expressa autorização,
                                do FI GROUP, o Sistema, objeto do licenciamento de direito de uso e seus respectivos módulos ou partes componentes, assim como seus manuais ou
                                quaisquer informações relativas aos mesmos, sujeitando-se o Usuário em caso de violação desta previsão, as sanções estabelecidas em lei;
                            </Typography>
                            <Typography>
                                7.2.2 Modificar e/ou ampliar os Dicionários de Dados do Sistema, objeto deste Contrato;
                            </Typography>
                            <Typography>
                                7.2.3 Alterar, incluir ou excluir dados contidos nos Dicionários de Dados do Sistema licenciado por meio de Sistemas por ele desenvolvidos ou por terceiros;
                            </Typography>
                            <Typography>
                                7.2.4. Criar cópias adicionais do Dicionário de Dados administrativo na mesma ou em outra Unidade Processadora, exceto se a cópia for gerada em
                                caráter transitório, única e exclusivamente para a finalidade de realização de testes do Sistema licenciado;
                            </Typography>
                            <Typography>
                                7.2.5	Modificar as características do Sistema ou módulos do Sistema, ampliá-los ou alterá-los de qualquer forma, sem a expressa anuência do FI GROUP,
                                ficando acertado que quaisquer alterações sobre o Sistema que venham a ser requisitadas pelo CLIENTE e/ou Usuários, ainda que tenham por finalidade
                                introduzir melhorias técnicas, só poderão ser operadas pelo FI GROUP ou pessoa expressamente autorizada pela mesma, estando ciente o CLIENTE e/ou Usuários,
                                ainda, de que independentemente de autorização, quaisquer produtos derivados do Sistema serão sempre de propriedade exclusiva do FI GROUP, sem que assista
                                ao CLIENTE e/ou Usuário qualquer direito sobre os mesmos;
                            </Typography>
                        </Typography>
                        <Typography>
                            7.3 Sem prejuízo do artigo anterior, o direito de uso é atribuído ao CLIENTE e incluirá o uso da plataforma aos seus colaboradores devidamente autorizados
                            pelo CLIENTE e que devem fazer uso da Plataforma no âmbito específico de seu relacionamento com o FI GROUP. Para tanto, a disponibilização do número de
                            acessos e controle ficará sob a gestão do FI GROUP.
                        </Typography>
                    </Typography>
                    <br />
                    <Typography style={titlesSharedStyle}>RESTRIÇÕES AO USO DOS SISTEMAS</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            8.1	O presente Contrato é regido pelas disposições da Lei 9.609/98 e Lei 9.610/98, ficando os infratores sujeitos às penas dos crimes previstos no
                            art. 12 da Lei 9.609/98, sem prejuízo da responsabilidade civil pelos danos eventualmente causados pelo uso e distribuição de cópias não autorizadas do Sistema
                            ou por qualquer outra violação aos direitos decorrentes da propriedade do Sistema.
                        </Typography>
                        <Typography className="paragraph">
                            8.1.1 O Sistema é protegido por leis e tratados internacionais de direitos autorais e de propriedade intelectual. A titularidade de todos e quaisquer direitos
                            autorais e de propriedade intelectual sobre o Sistema é do FI GROUP. É concedido o direito de uso do software ao CLIENTE e Usuários pelo prazo expresso indicado
                            neste instrumento, não havendo, em nenhuma hipótese, qualquer cessão de direitos relativos à propriedade do Sistema.
                        </Typography>
                        <Typography>
                            8.2	Proíbe-se qualquer procedimento que implique no aluguel, arrendamento, empréstimo, seja total ou parcial, do Sistema
                            a terceiros, bem como o fornecimento de serviços de hospedagem comercial do Sistema, a cessão, licenciamento e/ou empréstimo
                            destes a terceiros.
                        </Typography>
                        <Typography>
                            8.3	A extinção do presente instrumento, por qualquer meio, resulta na proibição do uso da Plataforma.
                        </Typography>
                        <Typography>
                            8.4	O FI GROUP não se responsabiliza pelos resultados produzidos pelo Sistema, caso este seja afetado por algum tipo de programa externo, como aqueles conhecidos
                            popularmente como vírus, ou por falha de operação. O FI GROUP não se responsabiliza, ainda, por: (i) integração do Sistema licenciado neste Contrato com qualquer
                            outro software de terceiros ou do Usuário, (ii) operação do Sistema por pessoas não autorizadas, (iii) qualquer defeito decorrente de culpa exclusiva do Usuário;
                            (iv) pelos danos ou prejuízos decorrentes de decisões administrativas, gerenciais ou comerciais tomadas com base nas informações fornecidas pelo Sistema e (v)
                            por eventos definidos na legislação civil como caso fortuito ou força maior.
                        </Typography>

                    </Typography>

                    <br />
                    <Typography style={titlesSharedStyle}>RESTRIÇÕES AO USO DOS SISTEMAS: PRIVACIDADE</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            9.1	A coleta, o tratamento, o armazenamento e a disponibilização dos dados, e das informações e dados fornecidos pelo Usuário ocorrerá sempre dentro dos limites
                            necessários a execução do serviço, o qual será feito a gestão direta pelo Sistema.
                        </Typography>
                        <Typography>
                            9.2	Ao realizar o cadastro e concordar com o Termo de Uso, o usuário possui ciência, concorda e autoriza com à coleta, tratamento e o armazenamento de seus dados
                            e dos demais dados pessoais que fornece ao FI GROUP, no momento de cadastro e ao decorrer da execução do serviço.
                        </Typography>
                        <Typography>
                            9.3	O Usuário garante que informará apenas dados corretos e que obteve de forma lícita ou mediante autorização, nos casos em que essa foi necessária.
                        </Typography>
                        <Typography>
                            9.4	O FI GROUP compromete-se, em relação aos dados pessoais coletados, a: (I) não utilizá-los para outros propósitos que não o exercício das atividades previstas
                            no Contrato de prestação de serviço estabelecido entre as Partes, cuja gestão é realizada através da Plataforma, exceto para (i) o cumprimento de obrigações legais
                            ou regulatórias; (ii) o exercício regular de direitos em processos, judiciais, administrativos ou arbitrais; e (iii) nos limites permitidos pelas Normas de Proteção
                            de Dados Aplicáveis; (II) não revelá-los a terceiros, quer direta ou indiretamente, seja mediante a distribuição de cópias, resumos, ou compilações, ou outros meios
                            que contenham ou de outra forma reflitam os referidos dados pessoais; (III) restringir o seu acesso, divulgando-os apenas àqueles funcionários e profissionais que
                            necessitem conhecê-los e na medida necessária à execução de suas tarefas.
                        </Typography>
                        <Typography>
                            9.5	No entanto, o FI GROUP recomenda fortemente que os Usuários adotem medidas de segurança em seus aparelhos e/ou máquinas, tais como a instalação de programa
                            antivírus e de firewall contra invasões.
                        </Typography>
                        <Typography>
                            9.6	Cada Usuário deverá criar uma senha e um login que são exclusivos e intransferíveis. É de responsabilidade exclusiva do Usuário o zelo e sigilo sobre suas
                            informações de login e senha.
                        </Typography>
                    </Typography>
                    <br />
                    <Typography style={titlesSharedStyle}>RESTRIÇÕES AO USO DOS SISTEMAS: VIGÊNCIA</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            10.1 O direito ao uso do Sistema será licenciado por prazo determinado enquanto perdurar a execução dos serviços do FI GROUP ao Usuário, conforme o contrato
                            estabelecido entre as Partes. O FI GROUP reserva-se o direito de dar por terminada ou suspender a disponibilização da Plataforma a qualquer tempo, a seu exclusivo
                            critério.
                        </Typography>
                    </Typography>

                    <br />
                    <Typography style={titlesSharedStyle}>RESTRIÇÕES AO USO DOS SISTEMAS: DISPOSIÇÕES GERAIS</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            11.1 É vedado ao Usuário ceder ou transferir a terceiros os direitos e obrigações decorrentes do presente instrumento, total ou parcialmente, salvo se com a
                            concordância prévia e expressa do FI GROUP.
                        </Typography>
                        <Typography>
                            11.2 Este Termo não estabelece ou enseja, direta ou indiretamente, interpretação de que há qualquer vínculo associativo de qualquer natureza entre as Partes,
                            aí incluindo, mas não restringindo, formação de joint venture ou assemelhados ou qualquer relação trabalhista com os respectivos prepostos, contratados ou funcionários.
                        </Typography>
                        <Typography>
                            11.3 A tolerância de uma parte para com a outra, relativamente a descumprimento de qualquer das obrigações assumidas, não será considerada novação ou renúncia a qualquer
                            direito, constituindo mera liberalidade, que não impedirá a parte tolerante de exigir da outra o fiel cumprimento destas Condições Gerais.
                        </Typography>
                        <Typography>
                            11.4 O FI GROUP poderá a qualquer momento rever o conteúdo do presente termo, devendo comunicar o Usuário através da plataforma.
                        </Typography>
                        <Typography>
                            11.5 Caso alguma disposição deste Termo esteja em conflito com o contrato de prestação de serviços, prevalecerá o previsto no presente documento.
                        </Typography>
                    </Typography>

                    <br />
                    <Typography style={titlesSharedStyle}>RESTRIÇÕES AO USO DOS SISTEMAS: COMUNICAÇÕES</Typography>
                    <Typography className="paragraph">
                        <Typography>
                            12.1 Todas as notificações entre Usuário e FI GROUP deverão ser feitas única e exclusivamente através do canal de contato com a equipe do FI GROUP,
                            pelo e-mail <a href="mailto:suporte.appleidobem@fi-group.com">suporte.appleidobem@fi-group.com</a>
                        </Typography>
                        <Typography>
                            12.2 Todas as notificações e comunicações por parte do FI GROUP ao Usuário serão consideradas válidas e eficazes, para todos os efeitos, quando
                            se derem através de qualquer das seguintes formas:
                        </Typography>
                        <Typography className="paragraph">
                            <Typography>
                                I.	Envio de mensagem por correio eletrônico a qualquer endereço eletrônico fornecido pelo Usuário;
                            </Typography>
                            <Typography>
                                II.	Envio de carta ao domicílio do Usuário quando este tiver fornecido um endereço; e/ou
                            </Typography>
                            <Typography>
                                III. Comunicação telefônica ao número fornecido pelo Usuário;
                            </Typography>
                        </Typography>
                    </Typography>

                    <br />
                    <Typography style={titlesSharedStyle}>RESTRIÇÕES AO USO DOS SISTEMAS: FORO CENTRAL DA COMARCA</Typography>
                    <Typography className="paragraph">
                        13.1 As partes elegem o foro Central da Comarca de São Paulo, Estado de São Paulo, para dirimir eventuais dúvidas ou controvérsias decorrentes do presente Contrato,
                        excluindo-se qualquer outro, por mais privilegiado que seja.
                    </Typography>

                    {/* paragrafo com anexos */}
                    {
                        (1 === 1 ?
                            <>
                                <br />
                                <Typography style={titlesSharedStyle}>ANEXO I</Typography>
                                <Typography className="paragraph">
                                    O PRESENTE ANEXO I SOMENTE É APLICÁVEL AOS CLIENTES ADERENTES À PARCERIA PARA OBTENÇÃO DE SERVIÇOS DE CORRETAGEM DE GARANTIAS
                                    <Typography>
                                        1.1.	A PARCEIRA é uma corretora de seguros, especializada em seguros financeiros e, atuará junto ao Cliente, de forma independente, a fim de fornecer facilitações na obtenção de garantias necessárias ao cumprimento dos critérios para a obtenção de financiamentos públicos.
                                    </Typography>
                                    <Typography>
                                        1.2.	O Cliente autoriza o FI GROUP a fornecer o acesso à PARCEIRA das informações confidenciais contidas no APP Financiamento, se obrigando a PARCEIRA a observar todas as disposições do presente Termo de Uso, incluindo, mas não se limitando, àquelas relacionadas à proteção de dados, confidencialidade e privacidade, bem como deverá observar rigorosamente a legislação vigente.
                                    </Typography>
                                    <Typography>
                                        1.3.	Além do presente Termo de Uso, o Cliente aderente aos serviços da PARCEIRA para financiamentos públicos declara estar ciente e de acordo com o Termo de Aceite, Anexo II.
                                    </Typography>
                                    <Typography>
                                        1.4.	O presente Termo de Uso não cria qualquer vínculo societário ou trabalhista entre o FI GROUP e a PARCEIRA.
                                    </Typography>
                                    <Typography>
                                        1.5.	O Cliente concorda em eximir o FI GROUP de quaisquer responsabilidades oriundas da coleta, solicitação, e/ou uso de quaisquer informações, de caráter confidencial ou não, pela PARCEIRA, uma vez que este, FI GROUP, atuará apenas como um intermediador das informações confidenciais, através da concessão de acesso à plataforma App Financiamento à PARCEIRA.
                                    </Typography>
                                    <Typography>
                                        1.6.	O FI GROUP não possui e não possuirá qualquer responsabilidade relacionada aos serviços prestados pela PARCEIRA, sendo esta última, a única responsável por quaisquer resultados oriundos da prestação de seus serviços, atuando o FI GROUP no papel de mero intermediador.
                                    </Typography>
                                    <Typography>
                                        1.7    O FI GROUP não é responsável pela negativa da PARCEIRA quanto à concessão de quaisquer garantias ao Cliente, sendo o Cliente e PARCEIRA os únicos responsáveis pelos termos e condições negócios que firmarem.
                                    </Typography>
                                </Typography>

                                <br />
                                <Typography style={titlesSharedStyle}>ANEXO II</Typography>
                                <Typography className="paragraph">
                                    <Typography>
                                        O PRESENTE ANEXO II SOMENTE É APLICÁVEL AO CLIENTES ADERENTES À PARCERIA PARA OBTENÇÃO DE SERVIÇOS DE CORRETAGEM DE GARANTIAS
                                    </Typography>
                                    <Typography>
                                        TERMO DE ACEITE
                                    </Typography>
                                    <Typography>
                                        O Cliente, declara para os devidos fins e efeitos, que autoriza o FI GROUP, a fornecer acesso à PARCEIRA ao portal Solução Digital Financiamento do Cliente, para a coleta das informações financeiras e contábeis a parceiros para o oferecimento de eventuais seguros que sejam necessários para o andamento e execução do serviço.
                                    </Typography>
                                    <Typography>
                                        Declara o Cliente, estar ciente de que o papel do FI GROUP será de tão somente o fornecimento do acesso ao APP Financiamento, sendo a responsabilidade pela solicitação, coleta e uso de quaisquer informações, de caráter confidencial ou não, inteiramente da PARCEIRA, portanto, o Cliente exime e eximirá o FI GROUP de quaisquer responsabilidades oriundas deste acesso.
                                    </Typography>
                                </Typography>
                            </> : '')
                    }
                </div>
            </AntDialog.Body>
            <AntDialog.Footer></AntDialog.Footer>
        </AntDialog>
    )
}