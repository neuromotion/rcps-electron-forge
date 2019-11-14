'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseArchs;

var _targets = require('electron-packager/targets');

function parseArchs(platform, declaredArch, electronVersion) {
  if (declaredArch === 'all') {
    return (0, _targets.allOfficialArchsForPlatformAndVersion)(platform, electronVersion) || ['x64'];
  }

  return declaredArch.split(',');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvcGFyc2UtYXJjaHMuanMiXSwibmFtZXMiOlsicGFyc2VBcmNocyIsInBsYXRmb3JtIiwiZGVjbGFyZWRBcmNoIiwiZWxlY3Ryb25WZXJzaW9uIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsVTs7QUFGeEI7O0FBRWUsU0FBU0EsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEJDLFlBQTlCLEVBQTRDQyxlQUE1QyxFQUE2RDtBQUMxRSxNQUFJRCxpQkFBaUIsS0FBckIsRUFBNEI7QUFDMUIsV0FBTyxvREFBc0NELFFBQXRDLEVBQWdERSxlQUFoRCxLQUFvRSxDQUFDLEtBQUQsQ0FBM0U7QUFDRDs7QUFFRCxTQUFPRCxhQUFhRSxLQUFiLENBQW1CLEdBQW5CLENBQVA7QUFDRCIsImZpbGUiOiJ1dGlsL3BhcnNlLWFyY2hzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsT2ZmaWNpYWxBcmNoc0ZvclBsYXRmb3JtQW5kVmVyc2lvbiB9IGZyb20gJ2VsZWN0cm9uLXBhY2thZ2VyL3RhcmdldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUFyY2hzKHBsYXRmb3JtLCBkZWNsYXJlZEFyY2gsIGVsZWN0cm9uVmVyc2lvbikge1xuICBpZiAoZGVjbGFyZWRBcmNoID09PSAnYWxsJykge1xuICAgIHJldHVybiBhbGxPZmZpY2lhbEFyY2hzRm9yUGxhdGZvcm1BbmRWZXJzaW9uKHBsYXRmb3JtLCBlbGVjdHJvblZlcnNpb24pIHx8IFsneDY0J107XG4gIH1cblxuICByZXR1cm4gZGVjbGFyZWRBcmNoLnNwbGl0KCcsJyk7XG59XG4iXX0=