const pacientes = [
  {
    nome: "Mateus Diogo Anthony Nunes",
    idade: 61,
    cpf: "015.385.798-63",
    rg: "10.410.177-5",
    data_nasc: "24/05/1963",
    sexo: "Masculino",
    signo: "Gêmeos",
    mae: "Nicole Isis Mariah",
    pai: "Noah Vinicius Nunes",
    email: "mateus-nunes90@viasegbrasil.com.br",
    senha: "MCaQESlEIS",
    cep: "77410-343",
    endereco: "Rua Presidente Costa e Silva",
    numero: 363,
    bairro: "Setor Central",
    cidade: "Gurupi",
    estado: "TO",
    telefone_fixo: "(63) 2827-0827",
    celular: "(63) 98292-3911",
    altura: "1,90",
    peso: 69,
    tipo_sanguineo: "B-",
    cor: "Preta",
  },
  {
    nome: "Manuel Ricardo Galvão",
    idade: 76,
    cpf: "817.477.118-29",
    rg: "40.072.465-0",
    data_nasc: "16/01/1948",
    sexo: "Masculino",
    signo: "Capricórnio",
    mae: "Jaqueline Larissa Luana",
    pai: "Juan Erick Davi Galvão",
    email: "manuelricardogalvao@jmmarcenaria.com.br",
    senha: "R3D1l37Bqe",
    cep: "72920-667",
    endereco: "Quadra Quadra 29",
    numero: 184,
    bairro: "Jardim Recanto",
    cidade: "Águas Lindas de Goiás",
    estado: "GO",
    telefone_fixo: "(61) 2825-4574",
    celular: "(61) 99704-3845",
    altura: "1,85",
    peso: 50,
    tipo_sanguineo: "AB+",
    cor: "Preta",
  },
  {
    nome: "Miguel Roberto Castro",
    idade: 28,
    cpf: "694.592.051-86",
    rg: "42.839.773-6",
    data_nasc: "12/05/1996",
    sexo: "Masculino",
    signo: "Touro",
    mae: "Gabriela Patrícia",
    pai: "Benedito César Luiz Castro",
    email: "miguelrobertocastro@jerasistemas.com.br",
    senha: "SlB6ptClLM",
    cep: "59600-462",
    endereco: "Travessa Antônio Delmiro",
    numero: 213,
    bairro: "Belo Horizonte",
    cidade: "Mossoró",
    estado: "RN",
    telefone_fixo: "(84) 2827-8121",
    celular: "(84) 99265-5946",
    altura: "1,72",
    peso: 72,
    tipo_sanguineo: "B-",
    cor: "Preta",
  },
  {
    nome: "Ana Aurora Sarah Nogueira",
    idade: 35,
    cpf: "375.368.249-71",
    rg: "31.352.725-8",
    data_nasc: "23/04/1989",
    sexo: "Feminino",
    signo: "Touro",
    mae: "Vitória Bianca Esther",
    pai: "Vitor Renan Tiago Nogueira",
    email: "ana-nogueira71@dvdja.com.br",
    senha: "5SRbPp17QY",
    cep: "75085-690",
    endereco: "Alameda Marudiária",
    numero: 170,
    bairro: "Sítio de Recreio Jardim Boa Vista",
    cidade: "Anápolis",
    estado: "GO",
    telefone_fixo: "(62) 3656-1716",
    celular: "(62) 98165-9544",
    altura: "1,76",
    peso: 63,
    tipo_sanguineo: "B-",
    cor: "Preta",
  },
  {
    nome: "Fábio Levi Almeida",
    idade: 35,
    cpf: "832.070.184-83",
    rg: "39.649.475-4",
    data_nasc: "22/02/1989",
    sexo: "Masculino",
    signo: "Peixes",
    mae: "Cláudia Kamilly Joana",
    pai: "Davi Jorge Jorge Almeida",
    email: "fabio_levi_almeida@oul.com.br",
    senha: "EBlTuBwAEw",
    cep: "49000-010",
    endereco: "Via Clara",
    numero: 525,
    bairro: "Zona de Expansão (Aruana)",
    cidade: "Aracaju",
    estado: "SE",
    telefone_fixo: "(79) 2645-3233",
    celular: "(79) 98774-3574",
    altura: "2,00",
    peso: 56,
    tipo_sanguineo: "A-",
    cor: "Preta",
  },
  {
    nome: "Cauã Giovanni Carlos Eduardo Teixeira",
    idade: 34,
    cpf: "242.216.604-06",
    rg: "35.082.840-4",
    data_nasc: "06/06/1990",
    sexo: "Masculino",
    signo: "Gêmeos",
    mae: "Marli Emanuelly Stella",
    pai: "Raul Nelson Teixeira",
    email: "caua-teixeira88@tokiomarine.com.br",
    senha: "oGPxMLgdzm",
    cep: "77430-640",
    endereco: "Rua 317",
    numero: 825,
    bairro: "Residencial Jardim dos Buritis",
    cidade: "Gurupi",
    estado: "TO",
    telefone_fixo: "(63) 3642-9974",
    celular: "(63) 99604-5055",
    altura: "1,78",
    peso: 107,
    tipo_sanguineo: "B-",
    cor: "Preta",
  },
  {
    nome: "Luís Breno Pinto",
    idade: 72,
    cpf: "766.199.503-45",
    rg: "34.455.647-5",
    data_nasc: "02/07/1952",
    sexo: "Masculino",
    signo: "Câncer",
    mae: "Catarina Rafaela",
    pai: "Renato Victor Sebastião Pinto",
    email: "luis_pinto@meiryjoias.com.br",
    senha: "nghuTJP7QB",
    cep: "38017-300",
    endereco: "Rua Dona Nitinha",
    numero: 728,
    bairro: "Boa Vista",
    cidade: "Uberaba",
    estado: "MG",
    telefone_fixo: "(34) 2846-0774",
    celular: "(34) 99172-1634",
    altura: "1,92",
    peso: 55,
    tipo_sanguineo: "O+",
    cor: "Preta",
  },
  {
    nome: "Manoel Renato Renato Peixoto",
    idade: 38,
    cpf: "162.220.162-00",
    rg: "26.813.467-4",
    data_nasc: "15/04/1986",
    sexo: "Masculino",
    signo: "Áries",
    mae: "Emilly Clara Emily",
    pai: "Guilherme Alexandre Kevin Peixoto",
    email: "manoel_renato_peixoto@piemme.com.br",
    senha: "9NKggQQ3G5",
    cep: "68928-075",
    endereco: "Avenida São João Apóstolo",
    numero: 144,
    bairro: "Paraíso",
    cidade: "Santana",
    estado: "AP",
    telefone_fixo: "(96) 3593-9979",
    celular: "(96) 98726-4470",
    altura: "1,81",
    peso: 61,
    tipo_sanguineo: "B-",
    cor: "Preta",
  },
  {
    nome: "Arthur Yuri Oliver Moreira",
    idade: 62,
    cpf: "799.153.772-23",
    rg: "12.692.021-7",
    data_nasc: "20/05/1962",
    sexo: "Masculino",
    signo: "Touro",
    mae: "Helena Laís",
    pai: "Hugo André Moreira",
    email: "arthur_moreira@unifesp.br",
    senha: "3OqjRJgAUy",
    cep: "57085-054",
    endereco: "Rua C-65",
    numero: 883,
    bairro: "Benedito Bentes",
    cidade: "Maceió",
    estado: "AL",
    telefone_fixo: "(82) 3523-6768",
    celular: "(82) 98149-8060",
    altura: "1,62",
    peso: 63,
    tipo_sanguineo: "O-",
    cor: "Preta",
  },
  {
    nome: "Agatha Antonella Marina Caldeira",
    idade: 74,
    cpf: "573.619.235-77",
    rg: "10.761.607-5",
    data_nasc: "21/04/1950",
    sexo: "Feminino",
    signo: "Touro",
    mae: "Analu Vitória",
    pai: "Bernardo Henry Caldeira",
    email: "agatha-caldeira77@vemter.com.br",
    senha: "tJjricu0pk",
    cep: "57601-422",
    endereco: "Rua Mariana Rodrigues de Melo",
    numero: 759,
    bairro: "São Cristóvão",
    cidade: "Palmeira dos Índios",
    estado: "AL",
    telefone_fixo: "(82) 3985-6293",
    celular: "(82) 98378-3100",
    altura: "1,73",
    peso: 64,
  },
];

export default pacientes;
