class RPNCalculator
	
	def evaluate(input)
		elements = input.split
		calculate(elements)
	end		

	def calculate(elements)
		if (elements.length > 1)
			for i in 0..(elements.length - 1)
				if (elements[i] == '+' || elements[i] == '-' || elements[i] == '/' || elements[i] == '*')
					result = eval(elements[i-2].to_s + elements[i].to_s + elements[i-1].to_s)					
					(elements[i-2] = result) && elements.delete_at(i-1) && elements.delete_at(i-1)
					calculate(elements)
				end				
			end
		end
		return elements[0].to_i
	end

end

calc = RPNCalculator.new
calc.evaluate('1 2 3 + -')
calc.evaluate('2 5 *')
calc.evaluate('50 20 -')
calc.evaluate('70 10 4 + 5 * -')
calc.evaluate('0')
calc.evaluate('1 1 +')
calc.evaluate('20 10 5 4 + * -')