import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Usuario } from '../../interfaces/usuario';
import { salvarUsuario } from '../../services/ApiService';
import { formatarCPF } from '../../utils/FormatarCpf';
import Title from '../../components/Title/TitleComponent';

const CadastroUsuario: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Usuario>();

  const onSubmit = async (data: Usuario) => {
    try {
      await salvarUsuario(data);
      alert('Usuário cadastrado com sucesso!');
      navigate('/usuarios');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <Title level='h2' text='Cadastro de usuários' bold className='mb-4' />
        <div className="mb-4">
          <label className="block mb-1 text-left">Nome</label>
          <input
            type="text"
            {...register('nome', { required: 'Nome é obrigatório' })}
            className={`w-full p-2 rounded bg-gray-700 text-white border ${errors.nome ? 'border-red-500' : 'border-transparent'}`}
          />
          {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block mb-1 text-left">Email</label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email é obrigatório', 
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Email inválido'
              }
            })}
            className={`w-full p-2 rounded bg-gray-700 text-white border ${errors.email ? 'border-red-500' : 'border-transparent'}`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-left">Senha</label>
          <input
            type="password"
            {...register('senha', { required: 'Senha é obrigatória' })}
            className={`w-full p-2 rounded bg-gray-700 text-white border ${errors.senha ? 'border-red-500' : 'border-transparent'}`}
          />
          {errors.senha && <p className="text-red-500">{errors.senha.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-left">CPF</label>
          <input
            type="text"
            {...register('cpf', { required: 'CPF é obrigatório',
                pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'CPF inválido'
                  }
             })}
            onChange={(e) => {
              const formattedValue = formatarCPF(e.target.value);
              e.target.value = formattedValue;
            }}
            className={`w-full p-2 rounded bg-gray-700 text-white border ${errors.cpf ? 'border-red-500' : 'border-transparent'}`}
          />
          {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-left">Data Nascimento</label>
          <input
            type="text"
            {...register('dataNascimento', { required: 'Data de nascimento é obrigatória' })}
            className={`w-full p-2 rounded bg-gray-700 text-white border ${errors.dataNascimento ? 'border-red-500' : 'border-transparent'}`}
          />
          {errors.dataNascimento && <p className="text-red-500">{errors.dataNascimento.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded bg-blue-600 hover:bg-blue-500 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;