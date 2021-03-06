//www.afxdyy.com
(function(d) {
	String.prototype.trim === d && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "")
	});
	Array.prototype.reduce === d && (Array.prototype.reduce = function(n) {
		if(void 0 === this || null === this) throw new TypeError;
		var t = Object(this),
			m = t.length >>> 0,
			p = 0,
			q;
		if("function" != typeof n) throw new TypeError;
		if(0 == m && 1 == arguments.length) throw new TypeError;
		if(2 <= arguments.length) q = arguments[1];
		else {
			do {
				if(p in t) {
					q = t[p++];
					break
				}
				if(++p >= m) throw new TypeError;
			} while (1)
		}
		for(; p < m;) p in t && (q = n.call(d,
			q, t[p], p, t)), p++;
		return q
	})
})();
var Zepto = function() {
	function d(a) {
		return null == a ? String(a) : L[V.call(a)] || "object"
	}

	function n(a) {
		return "function" == d(a)
	}

	function t(a) {
		return null != a && a == a.window
	}

	function m(a) {
		return null != a && a.nodeType == a.DOCUMENT_NODE
	}

	function p(a) {
		return "object" == d(a)
	}

	function q(a) {
		return p(a) && !t(a) && a.__proto__ == Object.prototype
	}

	function u(a) {
		return a instanceof Array
	}

	function x(a) {
		return "number" == typeof a.length
	}

	function G(a) {
		return J.call(a, function(a) {
			return null != a
		})
	}

	function y(a) {
		return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g,
			"$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function H(a) {
		return a in M ? M[a] : M[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
	}

	function F(a, f) {
		return "number" != typeof f || W[y(a)] ? f : f + "px"
	}

	function A(a) {
		return "children" in a ? z.call(a.children) : b.map(a.childNodes, function(a) {
			if(1 == a.nodeType) return a
		})
	}

	function I(a, f, k) {
		for(h in f) k && (q(f[h]) || u(f[h])) ? (q(f[h]) && !q(a[h]) && (a[h] = {}), u(f[h]) && !u(a[h]) && (a[h] = []), I(a[h], f[h], k)) : f[h] !== e && (a[h] = f[h])
	}

	function D(a, f) {
		return f === e ? b(a) :
			b(a).filter(f)
	}

	function v(a, f, k, b) {
		return n(f) ? f.call(a, k, b) : f
	}

	function E(a, f) {
		var k = a.className,
			b = k && k.baseVal !== e;
		if(f === e) return b ? k.baseVal : k;
		b ? k.baseVal = f : a.className = f
	}

	function B(a) {
		var f;
		try {
			return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(f = Number(a)) ? /^[\[\{]/.test(a) ? b.parseJSON(a) : a : f) : a
		} catch(k) {
			return a
		}
	}

	function g(a, f) {
		f(a);
		for(var k in a.childNodes) g(a.childNodes[k], f)
	}
	var e, h, b, l, c = [],
		z = c.slice,
		J = c.filter,
		C = window.document,
		r = {},
		M = {},
		N = C.defaultView.getComputedStyle,
		W = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		Q = /^\s*<(\w+|!)[^>]*>/,
		X = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		R = /^(?:body|html)$/i,
		Y = "val css html text data width height offset".split(" "),
		O = C.createElement("table"),
		S = C.createElement("tr"),
		T = {
			tr: C.createElement("tbody"),
			tbody: O,
			thead: O,
			tfoot: O,
			td: S,
			th: S,
			"*": C.createElement("div")
		},
		Z = /complete|loaded|interactive/,
		aa = /^\.([\w-]+)$/,
		ba = /^#([\w-]*)$/,
		ca = /^[\w-]+$/,
		L = {},
		V = L.toString,
		w = {},
		P, K,
		U = C.createElement("div");
	w.matches = function(a, f) {
		if(!a || 1 !== a.nodeType) return !1;
		var k = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
		if(k) return k.call(a, f);
		var b;
		b = a.parentNode;
		(k = !b) && (b = U).appendChild(a);
		b = ~w.qsa(b, f).indexOf(a);
		k && U.removeChild(a);
		return b
	};
	P = function(a) {
		return a.replace(/-+(.)?/g, function(a, k) {
			return k ? k.toUpperCase() : ""
		})
	};
	K = function(a) {
		return J.call(a, function(f, k) {
			return a.indexOf(f) == k
		})
	};
	w.fragment = function(a, f, k) {
		a.replace && (a = a.replace(X,
			"<$1></$2>"));
		f === e && (f = Q.test(a) && RegExp.$1);
		f in T || (f = "*");
		var l, c = T[f];
		c.innerHTML = "" + a;
		a = b.each(z.call(c.childNodes), function() {
			c.removeChild(this)
		});
		q(k) && (l = b(a), b.each(k, function(a, f) {
			if(-1 < Y.indexOf(a)) l[a](f);
			else l.attr(a, f)
		}));
		return a
	};
	w.Z = function(a, f) {
		a = a || [];
		a.__proto__ = b.fn;
		a.selector = f || "";
		return a
	};
	w.isZ = function(a) {
		return a instanceof w.Z
	};
	w.init = function(a, f) {
		if(a) {
			if(n(a)) return b(C).ready(a);
			if(w.isZ(a)) return a;
			var k;
			if(u(a)) k = G(a);
			else if(p(a)) k = [q(a) ? b.extend({}, a) : a], a =
				null;
			else if(Q.test(a)) k = w.fragment(a.trim(), RegExp.$1, f), a = null;
			else {
				if(f !== e) return b(f).find(a);
				k = w.qsa(C, a)
			}
			return w.Z(k, a)
		}
		return w.Z()
	};
	b = function(a, f) {
		return w.init(a, f)
	};
	b.extend = function(a) {
		var f, k = z.call(arguments, 1);
		"boolean" == typeof a && (f = a, a = k.shift());
		k.forEach(function(k) {
			I(a, k, f)
		});
		return a
	};
	w.qsa = function(a, f) {
		var k;
		return m(a) && ba.test(f) ? (k = a.getElementById(RegExp.$1)) ? [k] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : z.call(aa.test(f) ? a.getElementsByClassName(RegExp.$1) : ca.test(f) ? a.getElementsByTagName(f) :
			a.querySelectorAll(f))
	};
	b.contains = function(a, f) {
		return a !== f && a.contains(f)
	};
	b.type = d;
	b.isFunction = n;
	b.isWindow = t;
	b.isArray = u;
	b.isPlainObject = q;
	b.isEmptyObject = function(a) {
		for(var f in a) return !1;
		return !0
	};
	b.inArray = function(a, f, k) {
		return c.indexOf.call(f, a, k)
	};
	b.camelCase = P;
	b.trim = function(a) {
		return a.trim()
	};
	b.uuid = 0;
	b.support = {};
	b.expr = {};
	b.map = function(a, f) {
		var k, l = [],
			c;
		if(x(a))
			for(c = 0; c < a.length; c++) k = f(a[c], c), null != k && l.push(k);
		else
			for(c in a) k = f(a[c], c), null != k && l.push(k);
		return 0 < l.length ?
			b.fn.concat.apply([], l) : l
	};
	b.each = function(a, f) {
		var k;
		if(x(a))
			for(k = 0; k < a.length && !1 !== f.call(a[k], k, a[k]); k++);
		else
			for(k in a)
				if(!1 === f.call(a[k], k, a[k])) break;
		return a
	};
	b.grep = function(a, f) {
		return J.call(a, f)
	};
	window.JSON && (b.parseJSON = JSON.parse);
	b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, f) {
		L["[object " + f + "]"] = f.toLowerCase()
	});
	b.fn = {
		forEach: c.forEach,
		reduce: c.reduce,
		push: c.push,
		sort: c.sort,
		indexOf: c.indexOf,
		concat: c.concat,
		map: function(a) {
			return b(b.map(this,
				function(f, k) {
					return a.call(f, k, f)
				}))
		},
		slice: function() {
			return b(z.apply(this, arguments))
		},
		ready: function(a) {
			Z.test(C.readyState) ? a(b) : C.addEventListener("DOMContentLoaded", function() {
				a(b)
			}, !1);
			return this
		},
		get: function(a) {
			return a === e ? z.call(this) : this[0 <= a ? a : a + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(a) {
			c.every.call(this, function(f,
				k) {
				return !1 !== a.call(f, k, f)
			});
			return this
		},
		filter: function(a) {
			return n(a) ? this.not(this.not(a)) : b(J.call(this, function(f) {
				return w.matches(f, a)
			}))
		},
		add: function(a, f) {
			return b(K(this.concat(b(a, f))))
		},
		is: function(a) {
			return 0 < this.length && w.matches(this[0], a)
		},
		not: function(a) {
			var f = [];
			if(n(a) && a.call !== e) this.each(function(k) {
				a.call(this, k) || f.push(this)
			});
			else {
				var k = "string" == typeof a ? this.filter(a) : x(a) && n(a.item) ? z.call(a) : b(a);
				this.forEach(function(a) {
					0 > k.indexOf(a) && f.push(a)
				})
			}
			return b(f)
		},
		has: function(a) {
			return this.filter(function() {
				return p(a) ?
					b.contains(this, a) : b(this).find(a).size()
			})
		},
		eq: function(a) {
			return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			var a = this[0];
			return a && !p(a) ? a : b(a)
		},
		last: function() {
			var a = this[this.length - 1];
			return a && !p(a) ? a : b(a)
		},
		find: function(a) {
			var f = this;
			return "object" == typeof a ? b(a).filter(function() {
				var a = this;
				return c.some.call(f, function(f) {
					return b.contains(f, a)
				})
			}) : 1 == this.length ? b(w.qsa(this[0], a)) : this.map(function() {
				return w.qsa(this, a)
			})
		},
		closest: function(a, f) {
			var k = this[0],
				c = !1;
			for("object" ==
				typeof a && (c = b(a)); k && !(c ? 0 <= c.indexOf(k) : w.matches(k, a));) k = k !== f && !m(k) && k.parentNode;
			return b(k)
		},
		parents: function(a) {
			for(var f = [], k = this; 0 < k.length;) k = b.map(k, function(a) {
				if((a = a.parentNode) && !m(a) && 0 > f.indexOf(a)) return f.push(a), a
			});
			return D(f, a)
		},
		parent: function(a) {
			return D(K(this.pluck("parentNode")), a)
		},
		children: function(a) {
			return D(this.map(function() {
				return A(this)
			}), a)
		},
		contents: function() {
			return this.map(function() {
				return z.call(this.childNodes)
			})
		},
		siblings: function(a) {
			return D(this.map(function(a,
				k) {
				return J.call(A(k.parentNode), function(a) {
					return a !== k
				})
			}), a)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(a) {
			return b.map(this, function(f) {
				return f[a]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = null);
				if("none" == N(this, "").getPropertyValue("display")) {
					var a = this.style,
						f = this.nodeName,
						k, c;
					r[f] || (k = C.createElement(f), C.body.appendChild(k), c = N(k, "").getPropertyValue("display"), k.parentNode.removeChild(k), "none" ==
						c && (c = "block"), r[f] = c);
					a.display = r[f]
				}
			})
		},
		replaceWith: function(a) {
			return this.before(a).remove()
		},
		wrap: function(a) {
			var f = n(a);
			if(this[0] && !f) var k = b(a).get(0),
				c = k.parentNode || 1 < this.length;
			return this.each(function(l) {
				b(this).wrapAll(f ? a.call(this, l) : c ? k.cloneNode(!0) : k)
			})
		},
		wrapAll: function(a) {
			if(this[0]) {
				b(this[0]).before(a = b(a));
				for(var f;
					(f = a.children()).length;) a = f.first();
				b(a).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			var f = n(a);
			return this.each(function(c) {
				var l = b(this),
					g = l.contents();
				c = f ? a.call(this, c) : a;
				g.length ? g.wrapAll(c) : l.append(c)
			})
		},
		unwrap: function() {
			this.parent().each(function() {
				b(this).replaceWith(b(this).children())
			});
			return this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(a) {
			return this.each(function() {
				var f = b(this);
				(a === e ? "none" == f.css("display") : a) ? f.show(): f.hide()
			})
		},
		prev: function(a) {
			return b(this.pluck("previousElementSibling")).filter(a || "*")
		},
		next: function(a) {
			return b(this.pluck("nextElementSibling")).filter(a ||
				"*")
		},
		html: function(a) {
			return a === e ? 0 < this.length ? this[0].innerHTML : null : this.each(function(f) {
				var c = this.innerHTML;
				b(this).empty().append(v(this, a, f, c))
			})
		},
		text: function(a) {
			return a === e ? 0 < this.length ? this[0].textContent : null : this.each(function() {
				this.textContent = a
			})
		},
		attr: function(a, f) {
			var c;
			return "string" == typeof a && f === e ? 0 == this.length || 1 !== this[0].nodeType ? e : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
				if(1 === this.nodeType)
					if(p(a))
						for(h in a) {
							c =
								h;
							var b = a[h];
							null == b ? this.removeAttribute(c) : this.setAttribute(c, b)
						} else c = v(this, f, c, this.getAttribute(a)), null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
			})
		},
		removeAttr: function(a) {
			return this.each(function() {
				1 === this.nodeType && this.removeAttribute(a)
			})
		},
		prop: function(a, f) {
			return f === e ? this[0] && this[0][a] : this.each(function(c) {
				this[a] = v(this, f, c, this[a])
			})
		},
		data: function(a, f) {
			var c = this.attr("data-" + y(a), f);
			return null !== c ? B(c) : e
		},
		val: function(a) {
			return a === e ? this[0] && (this[0].multiple ? b(this[0]).find("option").filter(function(a) {
					return this.selected
				}).pluck("value") :
				this[0].value) : this.each(function(c) {
				this.value = v(this, a, c, this.value)
			})
		},
		offset: function(a) {
			if(a) return this.each(function(c) {
				var f = b(this);
				c = v(this, a, c, f.offset());
				var l = f.offsetParent().offset();
				c = {
					top: c.top - l.top,
					left: c.left - l.left
				};
				"static" == f.css("position") && (c.position = "relative");
				f.css(c)
			});
			if(0 == this.length) return null;
			var c = this[0].getBoundingClientRect();
			return {
				left: c.left + window.pageXOffset,
				top: c.top + window.pageYOffset,
				width: Math.round(c.width),
				height: Math.round(c.height)
			}
		},
		css: function(a,
			c) {
			if(2 > arguments.length && "string" == typeof a) return this[0] && (this[0].style[P(a)] || N(this[0], "").getPropertyValue(a));
			var b = "";
			if("string" == d(a)) c || 0 === c ? b = y(a) + ":" + F(a, c) : this.each(function() {
				this.style.removeProperty(y(a))
			});
			else
				for(h in a) a[h] || 0 === a[h] ? b += y(h) + ":" + F(h, a[h]) + ";" : this.each(function() {
					this.style.removeProperty(y(h))
				});
			return this.each(function() {
				this.style.cssText += ";" + b
			})
		},
		index: function(a) {
			return a ? this.indexOf(b(a)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(a) {
			return c.some.call(this,
				function(a) {
					return this.test(E(a))
				}, H(a))
		},
		addClass: function(a) {
			return this.each(function(c) {
				l = [];
				var k = E(this);
				v(this, a, c, k).split(/\s+/g).forEach(function(a) {
					b(this).hasClass(a) || l.push(a)
				}, this);
				l.length && E(this, k + (k ? " " : "") + l.join(" "))
			})
		},
		removeClass: function(a) {
			return this.each(function(c) {
				if(a === e) return E(this, "");
				l = E(this);
				v(this, a, c, l).split(/\s+/g).forEach(function(a) {
					l = l.replace(H(a), " ")
				});
				E(this, l.trim())
			})
		},
		toggleClass: function(a, c) {
			return this.each(function(l) {
				var g = b(this);
				v(this,
					a, l, E(this)).split(/\s+/g).forEach(function(a) {
					(c === e ? !g.hasClass(a) : c) ? g.addClass(a): g.removeClass(a)
				})
			})
		},
		scrollTop: function() {
			if(this.length) return "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY
		},
		position: function() {
			if(this.length) {
				var a = this[0],
					c = this.offsetParent(),
					l = this.offset(),
					g = R.test(c[0].nodeName) ? {
						top: 0,
						left: 0
					} : c.offset();
				l.top -= parseFloat(b(a).css("margin-top")) || 0;
				l.left -= parseFloat(b(a).css("margin-left")) || 0;
				g.top += parseFloat(b(c[0]).css("border-top-width")) || 0;
				g.left += parseFloat(b(c[0]).css("border-left-width")) ||
					0;
				return {
					top: l.top - g.top,
					left: l.left - g.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var a = this.offsetParent || C.body; a && !R.test(a.nodeName) && "static" == b(a).css("position");) a = a.offsetParent;
				return a
			})
		}
	};
	b.fn.detach = b.fn.remove;
	["width", "height"].forEach(function(a) {
		b.fn[a] = function(c) {
			var l, g = this[0],
				d = a.replace(/./, function(a) {
					return a[0].toUpperCase()
				});
			return c === e ? t(g) ? g["inner" + d] : m(g) ? g.documentElement["offset" + d] : (l = this.offset()) && l[a] : this.each(function(l) {
				g = b(this);
				g.css(a,
					v(this, c, l, g[a]()))
			})
		}
	});
	["after", "prepend", "before", "append"].forEach(function(a, c) {
		var l = c % 2;
		b.fn[a] = function() {
			var a, e = b.map(arguments, function(c) {
					a = d(c);
					return "object" == a || "array" == a || null == c ? c : w.fragment(c)
				}),
				z, h = 1 < this.length;
			return 1 > e.length ? this : this.each(function(a, d) {
				z = l ? d : d.parentNode;
				d = 0 == c ? d.nextSibling : 1 == c ? d.firstChild : 2 == c ? d : null;
				e.forEach(function(a) {
					if(h) a = a.cloneNode(!0);
					else if(!z) return b(a).remove();
					g(z.insertBefore(a, d), function(a) {
						null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() ||
							a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
					})
				})
			})
		};
		b.fn[l ? a + "To" : "insert" + (c ? "Before" : "After")] = function(c) {
			b(c)[a](this);
			return this
		}
	});
	w.Z.prototype = b.fn;
	w.uniq = K;
	w.deserializeValue = B;
	b.zepto = w;
	return b
}();
window.Zepto = Zepto;
"$" in window || (window.$ = Zepto);
(function(d) {
	function n(d) {
		var m = this.os = {},
			n = this.browser = {},
			q = d.match(/WebKit\/([\d.]+)/),
			u = d.match(/(Android)\s+([\d.]+)/),
			x = d.match(/(iPad).*OS\s([\d_]+)/),
			G = !x && d.match(/(iPhone\sOS)\s([\d_]+)/),
			y = d.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			H = y && d.match(/TouchPad/),
			F = d.match(/Kindle\/([\d.]+)/),
			A = d.match(/Silk\/([\d._]+)/),
			I = d.match(/(BlackBerry).*Version\/([\d.]+)/),
			D = d.match(/(BB10).*Version\/([\d.]+)/),
			v = d.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			E = d.match(/PlayBook/),
			B = d.match(/Chrome\/([\d.]+)/) ||
			d.match(/CriOS\/([\d.]+)/),
			g = d.match(/Firefox\/([\d.]+)/);
		if(n.webkit = !!q) n.version = q[1];
		u && (m.android = !0, m.version = u[2]);
		G && (m.ios = m.iphone = !0, m.version = G[2].replace(/_/g, "."));
		x && (m.ios = m.ipad = !0, m.version = x[2].replace(/_/g, "."));
		y && (m.webos = !0, m.version = y[2]);
		H && (m.touchpad = !0);
		I && (m.blackberry = !0, m.version = I[2]);
		D && (m.bb10 = !0, m.version = D[2]);
		v && (m.rimtabletos = !0, m.version = v[2]);
		E && (n.playbook = !0);
		F && (m.kindle = !0, m.version = F[1]);
		A && (n.silk = !0, n.version = A[1]);
		!A && m.android && d.match(/Kindle Fire/) &&
			(n.silk = !0);
		B && (n.chrome = !0, n.version = B[1]);
		g && (n.firefox = !0, n.version = g[1]);
		m.tablet = !!(x || E || u && !d.match(/Mobile/) || g && d.match(/Tablet/));
		m.phone = !(m.tablet || !(u || G || y || I || D || B && d.match(/Android/) || B && d.match(/CriOS\/([\d.]+)/) || g && d.match(/Mobile/)))
	}
	n.call(d, navigator.userAgent);
	d.__detect = n
})(Zepto);
(function(d) {
	function n(d) {
		return d._zid || (d._zid = F++)
	}

	function t(d, e, h, b) {
		e = m(e);
		if(e.ns) var l = new RegExp("(?:^| )" + e.ns.replace(" ", " .* ?") + "(?: |$)");
		return(H[n(d)] || []).filter(function(c) {
			return c && (!e.e || c.e == e.e) && (!e.ns || l.test(c.ns)) && (!h || n(c.fn) === n(h)) && (!b || c.sel == b)
		})
	}

	function m(d) {
		d = ("" + d).split(".");
		return {
			e: d[0],
			ns: d.slice(1).sort().join(" ")
		}
	}

	function p(g, e, h) {
		"string" != d.type(g) ? d.each(g, h) : g.split(/\s/).forEach(function(d) {
			h(d, e)
		})
	}

	function q(d) {
		return I[d] || d
	}

	function u(g, e, h,
		b, l, c) {
		var z = n(g),
			J = H[z] || (H[z] = []);
		p(e, h, function(e, z) {
			var h = m(e);
			h.fn = z;
			h.sel = b;
			h.e in I && (z = function(c) {
				var l = c.relatedTarget;
				if(!l || l !== this && !d.contains(this, l)) return h.fn.apply(this, arguments)
			});
			h.del = l && l(z, e);
			var n = h.del || z;
			h.proxy = function(c) {
				var l = n.apply(g, [c].concat(c.data));
				!1 === l && (c.preventDefault(), c.stopPropagation());
				return l
			};
			h.i = J.length;
			J.push(h);
			g.addEventListener(q(h.e), h.proxy, h.del && ("focus" == h.e || "blur" == h.e) || !!c)
		})
	}

	function x(d, e, h, b, l) {
		var c = n(d);
		p(e || "", h, function(e,
			h) {
			t(d, e, h, b).forEach(function(b) {
				delete H[c][b.i];
				d.removeEventListener(q(b.e), b.proxy, b.del && ("focus" == b.e || "blur" == b.e) || !!l)
			})
		})
	}

	function G(g) {
		var e, h = {
			originalEvent: g
		};
		for(e in g) E.test(e) || void 0 === g[e] || (h[e] = g[e]);
		d.each(B, function(d, l) {
			h[d] = function() {
				this[l] = D;
				return g[d].apply(g, arguments)
			};
			h[l] = v
		});
		return h
	}

	function y(d) {
		if(!("defaultPrevented" in d)) {
			d.defaultPrevented = !1;
			var e = d.preventDefault;
			d.preventDefault = function() {
				this.defaultPrevented = !0;
				e.call(this)
			}
		}
	}
	var H = {},
		F = 1,
		A = {},
		I = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	A.click = A.mousedown = A.mouseup = A.mousemove = "MouseEvents";
	d.event = {
		add: u,
		remove: x
	};
	d.proxy = function(g, e) {
		if(d.isFunction(g)) {
			var h = function() {
				return g.apply(e, arguments)
			};
			h._zid = n(g);
			return h
		}
		if("string" == typeof e) return d.proxy(g[e], g);
		throw new TypeError("expected function");
	};
	d.fn.bind = function(d, e) {
		return this.each(function() {
			u(this, d, e)
		})
	};
	d.fn.unbind = function(d, e) {
		return this.each(function() {
			x(this, d, e)
		})
	};
	d.fn.one = function(d, e) {
		return this.each(function(h, b) {
			u(this, d, e,
				null,
				function(d, c) {
					return function() {
						var e = d.apply(b, arguments);
						x(b, c, d);
						return e
					}
				})
		})
	};
	var D = function() {
			return !0
		},
		v = function() {
			return !1
		},
		E = /^([A-Z]|layer[XY]$)/,
		B = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	d.fn.delegate = function(g, e, h) {
		return this.each(function(b, l) {
			u(l, e, h, g, function(c) {
				return function(b) {
					var e, h = d(b.target).closest(g, l).get(0);
					if(h) return e = d.extend(G(b), {
						currentTarget: h,
						liveFired: l
					}), c.apply(h, [e].concat([].slice.call(arguments, 1)))
				}
			})
		})
	};
	d.fn.undelegate = function(d, e, h) {
		return this.each(function() {
			x(this, e, h, d)
		})
	};
	d.fn.live = function(g, e) {
		d(document.body).delegate(this.selector, g, e);
		return this
	};
	d.fn.die = function(g, e) {
		d(document.body).undelegate(this.selector, g, e);
		return this
	};
	d.fn.on = function(g, e, h) {
		return !e || d.isFunction(e) ? this.bind(g, e || h) : this.delegate(e, g, h)
	};
	d.fn.off = function(g, e, h) {
		return !e || d.isFunction(e) ? this.unbind(g, e || h) : this.undelegate(e, g, h)
	};
	d.fn.trigger = function(g, e) {
		if("string" ==
			typeof g || d.isPlainObject(g)) g = d.Event(g);
		y(g);
		g.data = e;
		return this.each(function() {
			"dispatchEvent" in this && this.dispatchEvent(g)
		})
	};
	d.fn.triggerHandler = function(g, e) {
		var h, b;
		this.each(function(l, c) {
			h = G("string" == typeof g ? d.Event(g) : g);
			h.data = e;
			h.target = c;
			d.each(t(c, g.type || g), function(c, d) {
				b = d.proxy(h);
				if(h.isImmediatePropagationStopped()) return !1
			})
		});
		return b
	};
	"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(g) {
		d.fn[g] =
			function(d) {
				return d ? this.bind(g, d) : this.trigger(g)
			}
	});
	["focus", "blur"].forEach(function(g) {
		d.fn[g] = function(d) {
			d ? this.bind(g, d) : this.each(function() {
				try {
					this[g]()
				} catch(d) {}
			});
			return this
		}
	});
	d.Event = function(d, e) {
		"string" != typeof d && (e = d, d = e.type);
		var h = document.createEvent(A[d] || "Events"),
			b = !0;
		if(e)
			for(var l in e) "bubbles" == l ? b = !!e[l] : h[l] = e[l];
		h.initEvent(d, b, !0, null, null, null, null, null, null, null, null, null, null, null, null);
		h.isDefaultPrevented = function() {
			return this.defaultPrevented
		};
		return h
	}
})(Zepto);
(function(d) {
	function n(l, c, b, e) {
		if(l.global) return l = c || D, b = d.Event(b), d(l).trigger(b, e), !b.defaultPrevented
	}

	function t(l) {
		l.global && 0 === d.active++ && n(l, null, "ajaxStart")
	}

	function m(d, c) {
		var b = c.context;
		if(!1 === c.beforeSend.call(b, d, c) || !1 === n(c, b, "ajaxBeforeSend", [d, c])) return !1;
		n(c, b, "ajaxSend", [d, c])
	}

	function p(d, c, b) {
		var e = b.context;
		b.success.call(e, d, "success", c);
		n(b, e, "ajaxSuccess", [c, b, d]);
		u("success", c, b)
	}

	function q(d, c, b, e) {
		var h = e.context;
		e.error.call(h, b, c, d);
		n(e, h, "ajaxError", [b, e, d]);
		u(c, b, e)
	}

	function u(b, c, e) {
		var h = e.context;
		e.complete.call(h, c, b);
		n(e, h, "ajaxComplete", [c, e]);
		e.global && !--d.active && n(e, null, "ajaxStop")
	}

	function x() {}

	function G(d) {
		d && (d = d.split(";", 2)[0]);
		return d && ("text/html" == d ? "html" : "application/json" == d ? "json" : g.test(d) ? "script" : e.test(d) && "xml") || "text"
	}

	function y(d, c) {
		return(d + "&" + c).replace(/[&?]{1,2}/, "?")
	}

	function H(b) {
		b.processData && b.data && "string" != d.type(b.data) && (b.data = d.param(b.data, b.traditional));
		!b.data || b.type && "GET" != b.type.toUpperCase() ||
			(b.url = y(b.url, b.data))
	}

	function F(b, c, e, h) {
		var g = !d.isFunction(c);
		return {
			url: b,
			data: g ? c : void 0,
			success: g ? d.isFunction(e) ? e : void 0 : c,
			dataType: g ? h || e : e
		}
	}

	function A(b, c, e, h) {
		var g, n = d.isArray(c);
		d.each(c, function(c, m) {
			g = d.type(m);
			h && (c = e ? h : h + "[" + (n ? "" : c) + "]");
			!h && n ? b.add(m.name, m.value) : "array" == g || !e && "object" == g ? A(b, m, e, c) : b.add(c, m)
		})
	}
	var I = 0,
		D = window.document,
		v, E, B = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		g = /^(?:text|application)\/javascript/i,
		e = /^(?:text|application)\/xml/i,
		h = /^\s*$/;
	d.active = 0;
	d.ajaxJSONP = function(b) {
		if(!("type" in b)) return d.ajax(b);
		var c = "jsonp" + ++I,
			e = D.createElement("script"),
			h = function() {
				clearTimeout(B);
				d(e).remove();
				delete window[c]
			},
			g = function(d) {
				h();
				d && "timeout" != d || (window[c] = x);
				q(null, d || "abort", n, b)
			},
			n = {
				abort: g
			},
			B;
		if(!1 === m(n, b)) return g("abort"), !1;
		window[c] = function(c) {
			h();
			p(c, n, b)
		};
		e.onerror = function() {
			g("error")
		};
		e.src = b.url.replace(/=\?/, "=" + c);
		d("head").append(e);
		0 < b.timeout && (B = setTimeout(function() {
			g("timeout")
		}, b.timeout));
		return n
	};
	d.ajaxSettings = {
		type: "GET",
		beforeSend: x,
		success: x,
		error: x,
		complete: x,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript",
			json: "application/json",
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	};
	d.ajax = function(b) {
		var c = d.extend({}, b || {});
		for(v in d.ajaxSettings) void 0 === c[v] && (c[v] = d.ajaxSettings[v]);
		t(c);
		c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) &&
			RegExp.$2 != window.location.host);
		c.url || (c.url = window.location.toString());
		H(c);
		!1 === c.cache && (c.url = y(c.url, "_=" + Date.now()));
		var e = c.dataType;
		b = /=\?/.test(c.url);
		if("jsonp" == e || b) return b || (c.url = y(c.url, "callback=?")), d.ajaxJSONP(c);
		b = c.accepts[e];
		var g = {},
			n = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol,
			r = c.xhr(),
			B;
		c.crossDomain || (g["X-Requested-With"] = "XMLHttpRequest");
		b && (g.Accept = b, -1 < b.indexOf(",") && (b = b.split(",", 2)[0]), r.overrideMimeType && r.overrideMimeType(b));
		if(c.contentType ||
			!1 !== c.contentType && c.data && "GET" != c.type.toUpperCase()) g["Content-Type"] = c.contentType || "application/x-www-form-urlencoded";
		c.headers = d.extend(g, c.headers || {});
		r.onreadystatechange = function() {
			if(4 == r.readyState) {
				r.onreadystatechange = x;
				clearTimeout(B);
				var b, g = !1;
				if(200 <= r.status && 300 > r.status || 304 == r.status || 0 == r.status && "file:" == n) {
					e = e || G(r.getResponseHeader("content-type"));
					b = r.responseText;
					try {
						"script" == e ? (0, eval)(b) : "xml" == e ? b = r.responseXML : "json" == e && (b = h.test(b) ? null : d.parseJSON(b))
					} catch(l) {
						g =
							l
					}
					g ? q(g, "parsererror", r, c) : p(b, r, c)
				} else q(null, r.status ? "error" : "abort", r, c)
			}
		};
		r.open(c.type, c.url, "async" in c ? c.async : !0);
		for(E in c.headers) r.setRequestHeader(E, c.headers[E]);
		if(!1 === m(r, c)) return r.abort(), !1;
		0 < c.timeout && (B = setTimeout(function() {
			r.onreadystatechange = x;
			r.abort();
			q(null, "timeout", r, c)
		}, c.timeout));
		r.send(c.data ? c.data : null);
		return r
	};
	d.get = function(b, c, e, g) {
		return d.ajax(F.apply(null, arguments))
	};
	d.post = function(b, c, e, g) {
		var h = F.apply(null, arguments);
		h.type = "POST";
		return d.ajax(h)
	};
	d.getJSON = function(b, c, e) {
		var g = F.apply(null, arguments);
		g.dataType = "json";
		return d.ajax(g)
	};
	d.fn.load = function(b, c, e) {
		if(!this.length) return this;
		var g = this,
			h = b.split(/\s/),
			n;
		b = F(b, c, e);
		var m = b.success;
		1 < h.length && (b.url = h[0], n = h[1]);
		b.success = function(b) {
			g.html(n ? d("<div>").html(b.replace(B, "")).find(n) : b);
			m && m.apply(g, arguments)
		};
		d.ajax(b);
		return this
	};
	var b = encodeURIComponent;
	d.param = function(d, c) {
		var e = [];
		e.add = function(c, d) {
			this.push(b(c) + "=" + b(d))
		};
		A(e, d, c);
		return e.join("&").replace(/%20/g,
			"+")
	}
})(Zepto);
(function(d) {
	d.fn.serializeArray = function() {
		var n = [],
			t;
		d(Array.prototype.slice.call(this.get(0).elements)).each(function() {
			t = d(this);
			var m = t.attr("type");
			"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != m && "reset" != m && "button" != m && ("radio" != m && "checkbox" != m || this.checked) && n.push({
				name: t.attr("name"),
				value: t.val()
			})
		});
		return n
	};
	d.fn.serialize = function() {
		var d = [];
		this.serializeArray().forEach(function(t) {
			d.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
		});
		return d.join("&")
	};
	d.fn.submit = function(n) {
		n ? this.bind("submit", n) : this.length && (n = d.Event("submit"), this.eq(0).trigger(n), n.defaultPrevented || this.get(0).submit());
		return this
	}
})(Zepto);
(function(d, n) {
	function t(d) {
		return d.toLowerCase()
	}

	function m(d) {
		return q ? q + d : t(d)
	}
	var p = "",
		q, u = window.document.createElement("div"),
		x = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		G, y, H, F, A, I, D, v = {};
	d.each({
		Webkit: "webkit",
		Moz: "",
		O: "o",
		ms: "MS"
	}, function(d, m) {
		if(u.style[d + "TransitionProperty"] !== n) return p = "-" + t(d) + "-", q = m, !1
	});
	G = p + "transform";
	v[y = p + "transition-property"] = v[H = p + "transition-duration"] = v[F = p + "transition-timing-function"] = v[A = p + "animation-name"] = v[I =
		p + "animation-duration"] = v[D = p + "animation-timing-function"] = "";
	d.fx = {
		off: q === n && u.style.transitionProperty === n,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: p,
		transitionEnd: m("TransitionEnd"),
		animationEnd: m("AnimationEnd")
	};
	d.fn.animate = function(n, m, g, e) {
		d.isPlainObject(m) && (g = m.easing, e = m.complete, m = m.duration);
		m && (m = ("number" == typeof m ? m : d.fx.speeds[m] || d.fx.speeds._default) / 1E3);
		return this.anim(n, m, g, e)
	};
	d.fn.anim = function(m, p, g, e) {
		var h, b = {},
			l, c = "",
			q = this,
			u, C = d.fx.transitionEnd;
		p === n && (p =
			.4);
		d.fx.off && (p = 0);
		if("string" == typeof m) b[A] = m, b[I] = p + "s", b[D] = g || "linear", C = d.fx.animationEnd;
		else {
			l = [];
			for(h in m) x.test(h) ? c += h + "(" + m[h] + ") " : (b[h] = m[h], l.push(t(h.replace(/([a-z])([A-Z])/, "$1-$2"))));
			c && (b[G] = c, l.push(G));
			0 < p && "object" === typeof m && (b[y] = l.join(", "), b[H] = p + "s", b[F] = g || "linear")
		}
		u = function(b) {
			if("undefined" !== typeof b) {
				if(b.target !== b.currentTarget) return;
				d(b.target).unbind(C, u)
			}
			d(this).css(v);
			e && e.call(this)
		};
		0 < p && this.bind(C, u);
		this.size() && this.get(0).clientLeft;
		this.css(b);
		0 >= p && setTimeout(function() {
			q.each(function() {
				u.call(this)
			})
		}, 0);
		return this
	};
	u = null
})(Zepto);