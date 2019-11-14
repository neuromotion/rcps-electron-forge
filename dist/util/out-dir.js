'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = require('path');

const BASE_OUT_DIR = 'out';

exports.default = (baseDir, forgeConfig) => {
  if (forgeConfig.buildIdentifier) {
    let identifier = forgeConfig.buildIdentifier;
    if (typeof identifier === 'function') {
      identifier = identifier();
    }
    if (identifier) return path.resolve(baseDir, BASE_OUT_DIR, identifier);
  }
  return path.resolve(baseDir, BASE_OUT_DIR);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvb3V0LWRpci5qcyJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIkJBU0VfT1VUX0RJUiIsImJhc2VEaXIiLCJmb3JnZUNvbmZpZyIsImJ1aWxkSWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztBQUVBLE1BQU1DLGVBQWUsS0FBckI7O2tCQUVlLENBQUNDLE9BQUQsRUFBVUMsV0FBVixLQUEwQjtBQUN2QyxNQUFJQSxZQUFZQyxlQUFoQixFQUFpQztBQUMvQixRQUFJQyxhQUFhRixZQUFZQyxlQUE3QjtBQUNBLFFBQUksT0FBT0MsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNwQ0EsbUJBQWFBLFlBQWI7QUFDRDtBQUNELFFBQUlBLFVBQUosRUFBZ0IsT0FBT04sS0FBS08sT0FBTCxDQUFhSixPQUFiLEVBQXNCRCxZQUF0QixFQUFvQ0ksVUFBcEMsQ0FBUDtBQUNqQjtBQUNELFNBQU9OLEtBQUtPLE9BQUwsQ0FBYUosT0FBYixFQUFzQkQsWUFBdEIsQ0FBUDtBQUNELEMiLCJmaWxlIjoidXRpbC9vdXQtZGlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgQkFTRV9PVVRfRElSID0gJ291dCc7XG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlRGlyLCBmb3JnZUNvbmZpZykgPT4ge1xuICBpZiAoZm9yZ2VDb25maWcuYnVpbGRJZGVudGlmaWVyKSB7XG4gICAgbGV0IGlkZW50aWZpZXIgPSBmb3JnZUNvbmZpZy5idWlsZElkZW50aWZpZXI7XG4gICAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllcigpO1xuICAgIH1cbiAgICBpZiAoaWRlbnRpZmllcikgcmV0dXJuIHBhdGgucmVzb2x2ZShiYXNlRGlyLCBCQVNFX09VVF9ESVIsIGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBwYXRoLnJlc29sdmUoYmFzZURpciwgQkFTRV9PVVRfRElSKTtcbn07XG4iXX0=