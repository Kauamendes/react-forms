export const formatarCPF = (valor: string | null) => {
    if (valor === null) return '';
    const apenasNumeros = valor.replace(/\D/g, '');
    return apenasNumeros.replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };
  