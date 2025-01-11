#include <iostream>
#include <vector>
#include <algorithm>

int main() {
      std::vector<int> numbers = {1, 5, 3, 4, 2};
      
      std::sort(numbers.begin(), numbers.end());
      
      std::cout << "Sorted numbers: ";
      for (int num : numbers) {
            std::cout << num << " ";
      }
      std::cout << std::endl;
      
      return 0;
}