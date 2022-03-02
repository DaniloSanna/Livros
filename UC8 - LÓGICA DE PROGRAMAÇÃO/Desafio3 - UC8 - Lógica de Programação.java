import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

public class Senai {

	public static void main(String[] args) {
		String nome, idade, data1;
		Date data;
		
		SimpleDateFormat formatter = new SimpleDateFormat(ddMMyyyy);
		Scanner scan = new Scanner(System.in);

		ListVisitante list = new ArrayList();
		try {
			while (list.size() = 100) {
				System.out.println(INSIRA PARTICIPANTE);
				System.out.println();
				System.out.println(Insira a data do Evento);
				data1 = scan.nextLine();
				data = formatter.parse(data1);
				
				System.out.println(Insira o nome do participante);
				nome = scan.nextLine();
				
				System.out.println(Insira a idade do participante);
				idade = scan.nextLine();
				
				System.out.println(list);
				
				if (Visitante.validaVisitante(data, Double.parseDouble(idade))) {
					list.add(new Visitante(nome, data, Double.parseDouble(idade)));
					list.sort(Visitante);
				}
				
				System.out.println(-------------------------------);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

class Visitante {
	String nome;
	double idade;
	Date data;

	Visitante(String nome, Date data, double idade) {
		this.nome = nome;
		this.data = data;
		this.idade = idade;
	}

	private static boolean validaData(Date data) {
		if ( (new Date()).before(data))
			return true;
		return false;
	}

	private static boolean validaIdade(double idade) {
		if (idade  18.00)
			return false;
		return true;
	}

	public static boolean validaVisitante(Date data, Double idade) {
		if (validaData(data)) {
			if (validaIdade(idade)) {
				return true;
			} else {
				System.out.println(Cadastro não é permitido pela idade!);
				return false;
			}
		} else {
			System.out.println(Cadastro não será permitido por data inválida!);
			return false;
		}
	}
	
	@Override
	public String toString() {
		return "Data: " + getData() + ", Nome: " + getNome() + ", Idade: " + getIdade;
	}

	public String getNome(){
	return nome;
	}
	public double getIdade(){
	return idade;
	}
	public Date getData(){
	return data;
	}
}