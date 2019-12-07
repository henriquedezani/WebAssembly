#include <emscripten/emscripten.h>

extern "C" {
	int EMSCRIPTEN_KEEPALIVE fib(int n) {
	  if (n == 1) return 1;
	  if (n == 2) return 1;
	  return fib(n-1) + fib(n-2);
	}
}

