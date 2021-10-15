
def sum_multiples_3_and_5(max_val):
    max_val = max_val - 1
    three_max = max_val // 3
    five_max = max_val // 5
    fifteen_max = max_val // 15

    three_sum = three_max * (three_max + 1) // 2
    five_sum = five_max * (five_max + 1) // 2
    fifteen_sum = fifteen_max * (fifteen_max + 1) // 2

    return 3 * three_sum + 5 * five_sum + 15 * fifteen_sum

if __name__ == "__main__":
    print(sum_multiples_3_and_5(10))
    print(sum_multiples_3_and_5(100))
    print(sum_multiples_3_and_5(1000))
    print(sum_multiples_3_and_5(10000))
    print(sum_multiples_3_and_5(100000))
    print(sum_multiples_3_and_5(1000000))
    print(sum_multiples_3_and_5(10000000))
    print(sum_multiples_3_and_5(100000000))
    print(sum_multiples_3_and_5(1000000000))