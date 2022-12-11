(() => {
	"use strict";
	var t = {
			d: (e, n) => {
				for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
					enumerable: !0,
					get: n[i]
				})
			},
			o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
			r: t => {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}
		},
		e = {};
	t.r(e), t.d(e, {
		ArcCurve: () => ma,
		CatmullRomCurve3: () => ba,
		CubicBezierCurve: () => wa,
		CubicBezierCurve3: () => Ta,
		EllipseCurve: () => fa,
		LineCurve: () => Aa,
		LineCurve3: () => Ra,
		QuadraticBezierCurve: () => Ca,
		QuadraticBezierCurve3: () => La,
		SplineCurve: () => Pa
	});
	const n = 100,
		i = 301,
		r = 302,
		a = 306,
		s = 1e3,
		o = 1001,
		l = 1002,
		c = 1003,
		h = 1006,
		u = 1008,
		d = 1009,
		p = 1014,
		f = 1015,
		m = 1016,
		g = 1020,
		_ = 1023,
		v = 1026,
		x = 1027,
		y = 33776,
		b = 33777,
		M = 33778,
		S = 33779,
		E = 3e3,
		w = 3001,
		T = "srgb",
		A = "srgb-linear",
		R = 7680,
		C = "300 es",
		L = 1035,
		P = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
		D = Math.PI / 180,
		O = 180 / Math.PI;

	function N() {
		const t = 4294967295 * Math.random() | 0,
			e = 4294967295 * Math.random() | 0,
			n = 4294967295 * Math.random() | 0,
			i = 4294967295 * Math.random() | 0;
		return (P[255 & t] + P[t >> 8 & 255] + P[t >> 16 & 255] + P[t >> 24 & 255] + "-" + P[255 & e] + P[e >> 8 & 255] + "-" + P[e >> 16 & 15 | 64] + P[e >> 24 & 255] + "-" + P[63 & n | 128] + P[n >> 8 & 255] + "-" + P[n >> 16 & 255] + P[n >> 24 & 255] + P[255 & i] + P[i >> 8 & 255] + P[i >> 16 & 255] + P[i >> 24 & 255])
			.toLowerCase()
	}

	function I(t, e, n) {
		return Math.max(e, Math.min(n, t))
	}

	function U(t, e, n) {
		return (1 - n) * t + n * e
	}

	function F(t) {
		return 0 == (t & t - 1) && 0 !== t
	}

	function z(t) {
		return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
	}

	function B(t, e) {
		switch (e.constructor) {
			case Float32Array:
				return t;
			case Uint16Array:
				return t / 65535;
			case Uint8Array:
				return t / 255;
			case Int16Array:
				return Math.max(t / 32767, -1);
			case Int8Array:
				return Math.max(t / 127, -1);
			default:
				throw new Error("Invalid component type.")
		}
	}

	function H(t, e) {
		switch (e.constructor) {
			case Float32Array:
				return t;
			case Uint16Array:
				return Math.round(65535 * t);
			case Uint8Array:
				return Math.round(255 * t);
			case Int16Array:
				return Math.round(32767 * t);
			case Int8Array:
				return Math.round(127 * t);
			default:
				throw new Error("Invalid component type.")
		}
	}
	class k {
		constructor(t = 0, e = 0, n = 0, i = 1) {
			this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i
		}
		static slerpFlat(t, e, n, i, r, a, s) {
			let o = n[i + 0],
				l = n[i + 1],
				c = n[i + 2],
				h = n[i + 3];
			const u = r[a + 0],
				d = r[a + 1],
				p = r[a + 2],
				f = r[a + 3];
			if (0 === s) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void(t[e + 3] = h);
			if (1 === s) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = f);
			if (h !== f || o !== u || l !== d || c !== p) {
				let t = 1 - s;
				const e = o * u + l * d + c * p + h * f,
					n = e >= 0 ? 1 : -1,
					i = 1 - e * e;
				if (i > Number.EPSILON) {
					const r = Math.sqrt(i),
						a = Math.atan2(r, e * n);
					t = Math.sin(t * a) / r, s = Math.sin(s * a) / r
				}
				const r = s * n;
				if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + f * r, t === 1 - s) {
					const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
					o *= t, l *= t, c *= t, h *= t
				}
			}
			t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h
		}
		static multiplyQuaternionsFlat(t, e, n, i, r, a) {
			const s = n[i],
				o = n[i + 1],
				l = n[i + 2],
				c = n[i + 3],
				h = r[a],
				u = r[a + 1],
				d = r[a + 2],
				p = r[a + 3];
			return t[e] = s * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - s * d, t[e + 2] = l * p + c * d + s * u - o * h, t[e + 3] = c * p - s * h - o * u - l * d, t
		}
		get x() {
			return this._x
		}
		set x(t) {
			this._x = t, this._onChangeCallback()
		}
		get y() {
			return this._y
		}
		set y(t) {
			this._y = t, this._onChangeCallback()
		}
		get z() {
			return this._z
		}
		set z(t) {
			this._z = t, this._onChangeCallback()
		}
		get w() {
			return this._w
		}
		set w(t) {
			this._w = t, this._onChangeCallback()
		}
		set(t, e, n, i) {
			return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		}
		copy(t) {
			return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
		}
		setFromEuler(t, e) {
			const n = t._x,
				i = t._y,
				r = t._z,
				a = t._order,
				s = Math.cos,
				o = Math.sin,
				l = s(n / 2),
				c = s(i / 2),
				h = s(r / 2),
				u = o(n / 2),
				d = o(i / 2),
				p = o(r / 2);
			switch (a) {
				case "XYZ":
					this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
					break;
				case "YXZ":
					this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
					break;
				case "ZXY":
					this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
					break;
				case "ZYX":
					this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
					break;
				case "YZX":
					this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
					break;
				case "XZY":
					this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
					break;
				default:
					console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
			}
			return !1 !== e && this._onChangeCallback(), this
		}
		setFromAxisAngle(t, e) {
			const n = e / 2,
				i = Math.sin(n);
			return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
		}
		setFromRotationMatrix(t) {
			const e = t.elements,
				n = e[0],
				i = e[4],
				r = e[8],
				a = e[1],
				s = e[5],
				o = e[9],
				l = e[2],
				c = e[6],
				h = e[10],
				u = n + s + h;
			if (u > 0) {
				const t = .5 / Math.sqrt(u + 1);
				this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (a - i) * t
			} else if (n > s && n > h) {
				const t = 2 * Math.sqrt(1 + n - s - h);
				this._w = (c - o) / t, this._x = .25 * t, this._y = (i + a) / t, this._z = (r + l) / t
			} else if (s > h) {
				const t = 2 * Math.sqrt(1 + s - n - h);
				this._w = (r - l) / t, this._x = (i + a) / t, this._y = .25 * t, this._z = (o + c) / t
			} else {
				const t = 2 * Math.sqrt(1 + h - n - s);
				this._w = (a - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t
			}
			return this._onChangeCallback(), this
		}
		setFromUnitVectors(t, e) {
			let n = t.dot(e) + 1;
			return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
		}
		angleTo(t) {
			return 2 * Math.acos(Math.abs(I(this.dot(t), -1, 1)))
		}
		rotateTowards(t, e) {
			const n = this.angleTo(t);
			if (0 === n) return this;
			const i = Math.min(1, e / n);
			return this.slerp(t, i), this
		}
		identity() {
			return this.set(0, 0, 0, 1)
		}
		invert() {
			return this.conjugate()
		}
		conjugate() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
		}
		dot(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
		}
		lengthSq() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		}
		length() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		}
		normalize() {
			let t = this.length();
			return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
		}
		multiply(t) {
			return this.multiplyQuaternions(this, t)
		}
		premultiply(t) {
			return this.multiplyQuaternions(t, this)
		}
		multiplyQuaternions(t, e) {
			const n = t._x,
				i = t._y,
				r = t._z,
				a = t._w,
				s = e._x,
				o = e._y,
				l = e._z,
				c = e._w;
			return this._x = n * c + a * s + i * l - r * o, this._y = i * c + a * o + r * s - n * l, this._z = r * c + a * l + n * o - i * s, this._w = a * c - n * s - i * o - r * l, this._onChangeCallback(), this
		}
		slerp(t, e) {
			if (0 === e) return this;
			if (1 === e) return this.copy(t);
			const n = this._x,
				i = this._y,
				r = this._z,
				a = this._w;
			let s = a * t._w + n * t._x + i * t._y + r * t._z;
			if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), s >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
			const o = 1 - s * s;
			if (o <= Number.EPSILON) {
				const t = 1 - e;
				return this._w = t * a + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
			}
			const l = Math.sqrt(o),
				c = Math.atan2(l, s),
				h = Math.sin((1 - e) * c) / l,
				u = Math.sin(e * c) / l;
			return this._w = a * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
		}
		slerpQuaternions(t, e, n) {
			return this.copy(t)
				.slerp(e, n)
		}
		random() {
			const t = Math.random(),
				e = Math.sqrt(1 - t),
				n = Math.sqrt(t),
				i = 2 * Math.PI * Math.random(),
				r = 2 * Math.PI * Math.random();
			return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
		}
		fromArray(t, e = 0) {
			return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
		}
		toArray(t = [], e = 0) {
			return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
		}
		fromBufferAttribute(t, e) {
			return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
		}
		_onChange(t) {
			return this._onChangeCallback = t, this
		}
		_onChangeCallback() {}*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._w
		}
	}
	class G {
		constructor(t = 0, e = 0, n = 0) {
			G.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n
		}
		set(t, e, n) {
			return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
		}
		setScalar(t) {
			return this.x = t, this.y = t, this.z = t, this
		}
		setX(t) {
			return this.x = t, this
		}
		setY(t) {
			return this.y = t, this
		}
		setZ(t) {
			return this.z = t, this
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + t)
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z)
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this
		}
		add(t) {
			return this.x += t.x, this.y += t.y, this.z += t.z, this
		}
		addScalar(t) {
			return this.x += t, this.y += t, this.z += t, this
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
		}
		sub(t) {
			return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this.z -= t, this
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this.z *= t, this
		}
		multiplyVectors(t, e) {
			return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
		}
		applyEuler(t) {
			return this.applyQuaternion(W.setFromEuler(t))
		}
		applyAxisAngle(t, e) {
			return this.applyQuaternion(W.setFromAxisAngle(t, e))
		}
		applyMatrix3(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
		}
		applyNormalMatrix(t) {
			return this.applyMatrix3(t)
				.normalize()
		}
		applyMatrix4(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements,
				a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
			return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this
		}
		applyQuaternion(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.x,
				a = t.y,
				s = t.z,
				o = t.w,
				l = o * e + a * i - s * n,
				c = o * n + s * e - r * i,
				h = o * i + r * n - a * e,
				u = -r * e - a * n - s * i;
			return this.x = l * o + u * -r + c * -s - h * -a, this.y = c * o + u * -a + h * -r - l * -s, this.z = h * o + u * -s + l * -a - c * -r, this
		}
		project(t) {
			return this.applyMatrix4(t.matrixWorldInverse)
				.applyMatrix4(t.projectionMatrix)
		}
		unproject(t) {
			return this.applyMatrix4(t.projectionMatrixInverse)
				.applyMatrix4(t.matrixWorld)
		}
		transformDirection(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t)
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
		}
		clamp(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
		}
		clampScalar(t, e) {
			return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1)
				.multiplyScalar(Math.max(t, Math.min(e, n)))
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		}
		roundToZero() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		}
		normalize() {
			return this.divideScalar(this.length() || 1)
		}
		setLength(t) {
			return this.normalize()
				.multiplyScalar(t)
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
		}
		lerpVectors(t, e, n) {
			return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
		}
		cross(t) {
			return this.crossVectors(this, t)
		}
		crossVectors(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				a = e.x,
				s = e.y,
				o = e.z;
			return this.x = i * o - r * s, this.y = r * a - n * o, this.z = n * s - i * a, this
		}
		projectOnVector(t) {
			const e = t.lengthSq();
			if (0 === e) return this.set(0, 0, 0);
			const n = t.dot(this) / e;
			return this.copy(t)
				.multiplyScalar(n)
		}
		projectOnPlane(t) {
			return V.copy(this)
				.projectOnVector(t), this.sub(V)
		}
		reflect(t) {
			return this.sub(V.copy(t)
				.multiplyScalar(2 * this.dot(t)))
		}
		angleTo(t) {
			const e = Math.sqrt(this.lengthSq() * t.lengthSq());
			if (0 === e) return Math.PI / 2;
			const n = this.dot(t) / e;
			return Math.acos(I(n, -1, 1))
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t))
		}
		distanceToSquared(t) {
			const e = this.x - t.x,
				n = this.y - t.y,
				i = this.z - t.z;
			return e * e + n * n + i * i
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
		}
		setFromSpherical(t) {
			return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
		}
		setFromSphericalCoords(t, e, n) {
			const i = Math.sin(e) * t;
			return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
		}
		setFromCylindrical(t) {
			return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
		}
		setFromCylindricalCoords(t, e, n) {
			return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
		}
		setFromMatrixPosition(t) {
			const e = t.elements;
			return this.x = e[12], this.y = e[13], this.z = e[14], this
		}
		setFromMatrixScale(t) {
			const e = this.setFromMatrixColumn(t, 0)
				.length(),
				n = this.setFromMatrixColumn(t, 1)
				.length(),
				i = this.setFromMatrixColumn(t, 2)
				.length();
			return this.x = e, this.y = n, this.z = i, this
		}
		setFromMatrixColumn(t, e) {
			return this.fromArray(t.elements, 4 * e)
		}
		setFromMatrix3Column(t, e) {
			return this.fromArray(t.elements, 3 * e)
		}
		setFromEuler(t) {
			return this.x = t._x, this.y = t._y, this.z = t._z, this
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
		}
		fromBufferAttribute(t, e) {
			return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
		}
		randomDirection() {
			const t = 2 * (Math.random() - .5),
				e = Math.random() * Math.PI * 2,
				n = Math.sqrt(1 - t ** 2);
			return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this
		}*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z
		}
	}
	const V = new G,
		W = new k;
	class X {
		constructor(t = new G(1 / 0, 1 / 0, 1 / 0), e = new G(-1 / 0, -1 / 0, -1 / 0)) {
			this.isBox3 = !0, this.min = t, this.max = e
		}
		set(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		}
		setFromArray(t) {
			let e = 1 / 0,
				n = 1 / 0,
				i = 1 / 0,
				r = -1 / 0,
				a = -1 / 0,
				s = -1 / 0;
			for (let o = 0, l = t.length; o < l; o += 3) {
				const l = t[o],
					c = t[o + 1],
					h = t[o + 2];
				l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > a && (a = c), h > s && (s = h)
			}
			return this.min.set(e, n, i), this.max.set(r, a, s), this
		}
		setFromBufferAttribute(t) {
			let e = 1 / 0,
				n = 1 / 0,
				i = 1 / 0,
				r = -1 / 0,
				a = -1 / 0,
				s = -1 / 0;
			for (let o = 0, l = t.count; o < l; o++) {
				const l = t.getX(o),
					c = t.getY(o),
					h = t.getZ(o);
				l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > a && (a = c), h > s && (s = h)
			}
			return this.min.set(e, n, i), this.max.set(r, a, s), this
		}
		setFromPoints(t) {
			this.makeEmpty();
			for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this
		}
		setFromCenterAndSize(t, e) {
			const n = q.copy(e)
				.multiplyScalar(.5);
			return this.min.copy(t)
				.sub(n), this.max.copy(t)
				.add(n), this
		}
		setFromObject(t, e = !1) {
			return this.makeEmpty(), this.expandByObject(t, e)
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		}
		makeEmpty() {
			return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		}
		getCenter(t) {
			return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max)
				.multiplyScalar(.5)
		}
		getSize(t) {
			return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
		}
		expandByPoint(t) {
			return this.min.min(t), this.max.max(t), this
		}
		expandByVector(t) {
			return this.min.sub(t), this.max.add(t), this
		}
		expandByScalar(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		}
		expandByObject(t, e = !1) {
			t.updateWorldMatrix(!1, !1);
			const n = t.geometry;
			if (void 0 !== n)
				if (e && null != n.attributes && void 0 !== n.attributes.position) {
					const e = n.attributes.position;
					for (let n = 0, i = e.count; n < i; n++) q.fromBufferAttribute(e, n)
						.applyMatrix4(t.matrixWorld), this.expandByPoint(q)
				} else null === n.boundingBox && n.computeBoundingBox(), Y.copy(n.boundingBox), Y.applyMatrix4(t.matrixWorld), this.union(Y);
			const i = t.children;
			for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
			return this
		}
		containsPoint(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
		}
		containsBox(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
		}
		getParameter(t, e) {
			return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
		}
		intersectsBox(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
		}
		intersectsSphere(t) {
			return this.clampPoint(t.center, q), q.distanceToSquared(t.center) <= t.radius * t.radius
		}
		intersectsPlane(t) {
			let e, n;
			return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
		}
		intersectsTriangle(t) {
			if (this.isEmpty()) return !1;
			this.getCenter(et), nt.subVectors(this.max, et), Z.subVectors(t.a, et), J.subVectors(t.b, et), K.subVectors(t.c, et), Q.subVectors(J, Z), $.subVectors(K, J), tt.subVectors(Z, K);
			let e = [0, -Q.z, Q.y, 0, -$.z, $.y, 0, -tt.z, tt.y, Q.z, 0, -Q.x, $.z, 0, -$.x, tt.z, 0, -tt.x, -Q.y, Q.x, 0, -$.y, $.x, 0, -tt.y, tt.x, 0];
			return !!at(e, Z, J, K, nt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!at(e, Z, J, K, nt) && (it.crossVectors(Q, $), e = [it.x, it.y, it.z], at(e, Z, J, K, nt)))
		}
		clampPoint(t, e) {
			return e.copy(t)
				.clamp(this.min, this.max)
		}
		distanceToPoint(t) {
			return q.copy(t)
				.clamp(this.min, this.max)
				.sub(t)
				.length()
		}
		getBoundingSphere(t) {
			return this.getCenter(t.center), t.radius = .5 * this.getSize(q)
				.length(), t
		}
		intersect(t) {
			return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
		}
		union(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		}
		applyMatrix4(t) {
			return this.isEmpty() || (j[0].set(this.min.x, this.min.y, this.min.z)
				.applyMatrix4(t), j[1].set(this.min.x, this.min.y, this.max.z)
				.applyMatrix4(t), j[2].set(this.min.x, this.max.y, this.min.z)
				.applyMatrix4(t), j[3].set(this.min.x, this.max.y, this.max.z)
				.applyMatrix4(t), j[4].set(this.max.x, this.min.y, this.min.z)
				.applyMatrix4(t), j[5].set(this.max.x, this.min.y, this.max.z)
				.applyMatrix4(t), j[6].set(this.max.x, this.max.y, this.min.z)
				.applyMatrix4(t), j[7].set(this.max.x, this.max.y, this.max.z)
				.applyMatrix4(t), this.setFromPoints(j)), this
		}
		translate(t) {
			return this.min.add(t), this.max.add(t), this
		}
		equals(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}
	const j = [new G, new G, new G, new G, new G, new G, new G, new G],
		q = new G,
		Y = new X,
		Z = new G,
		J = new G,
		K = new G,
		Q = new G,
		$ = new G,
		tt = new G,
		et = new G,
		nt = new G,
		it = new G,
		rt = new G;

	function at(t, e, n, i, r) {
		for (let a = 0, s = t.length - 3; a <= s; a += 3) {
			rt.fromArray(t, a);
			const s = r.x * Math.abs(rt.x) + r.y * Math.abs(rt.y) + r.z * Math.abs(rt.z),
				o = e.dot(rt),
				l = n.dot(rt),
				c = i.dot(rt);
			if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1
		}
		return !0
	}
	const st = new X,
		ot = new G,
		lt = new G,
		ct = new G;
	class ht {
		constructor(t = new G, e = -1) {
			this.center = t, this.radius = e
		}
		set(t, e) {
			return this.center.copy(t), this.radius = e, this
		}
		setFromPoints(t, e) {
			const n = this.center;
			void 0 !== e ? n.copy(e) : st.setFromPoints(t)
				.getCenter(n);
			let i = 0;
			for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
			return this.radius = Math.sqrt(i), this
		}
		copy(t) {
			return this.center.copy(t.center), this.radius = t.radius, this
		}
		isEmpty() {
			return this.radius < 0
		}
		makeEmpty() {
			return this.center.set(0, 0, 0), this.radius = -1, this
		}
		containsPoint(t) {
			return t.distanceToSquared(this.center) <= this.radius * this.radius
		}
		distanceToPoint(t) {
			return t.distanceTo(this.center) - this.radius
		}
		intersectsSphere(t) {
			const e = this.radius + t.radius;
			return t.center.distanceToSquared(this.center) <= e * e
		}
		intersectsBox(t) {
			return t.intersectsSphere(this)
		}
		intersectsPlane(t) {
			return Math.abs(t.distanceToPoint(this.center)) <= this.radius
		}
		clampPoint(t, e) {
			const n = this.center.distanceToSquared(t);
			return e.copy(t), n > this.radius * this.radius && (e.sub(this.center)
				.normalize(), e.multiplyScalar(this.radius)
				.add(this.center)), e
		}
		getBoundingBox(t) {
			return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
		}
		applyMatrix4(t) {
			return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
		}
		translate(t) {
			return this.center.add(t), this
		}
		expandByPoint(t) {
			if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
			ct.subVectors(t, this.center);
			const e = ct.lengthSq();
			if (e > this.radius * this.radius) {
				const t = Math.sqrt(e),
					n = .5 * (t - this.radius);
				this.center.add(ct.multiplyScalar(n / t)), this.radius += n
			}
			return this
		}
		union(t) {
			return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? lt.set(0, 0, 1)
				.multiplyScalar(t.radius) : lt.subVectors(t.center, this.center)
				.normalize()
				.multiplyScalar(t.radius), this.expandByPoint(ot.copy(t.center)
					.add(lt)), this.expandByPoint(ot.copy(t.center)
					.sub(lt)), this)
		}
		equals(t) {
			return t.center.equals(this.center) && t.radius === this.radius
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
	}
	class ut {
		constructor() {
			ut.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
		}
		set(t, e, n, i, r, a, s, o, l) {
			const c = this.elements;
			return c[0] = t, c[1] = i, c[2] = s, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = a, c[8] = l, this
		}
		identity() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		}
		copy(t) {
			const e = this.elements,
				n = t.elements;
			return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
		}
		extractBasis(t, e, n) {
			return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
		}
		setFromMatrix4(t) {
			const e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
		}
		multiply(t) {
			return this.multiplyMatrices(this, t)
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this)
		}
		multiplyMatrices(t, e) {
			const n = t.elements,
				i = e.elements,
				r = this.elements,
				a = n[0],
				s = n[3],
				o = n[6],
				l = n[1],
				c = n[4],
				h = n[7],
				u = n[2],
				d = n[5],
				p = n[8],
				f = i[0],
				m = i[3],
				g = i[6],
				_ = i[1],
				v = i[4],
				x = i[7],
				y = i[2],
				b = i[5],
				M = i[8];
			return r[0] = a * f + s * _ + o * y, r[3] = a * m + s * v + o * b, r[6] = a * g + s * x + o * M, r[1] = l * f + c * _ + h * y, r[4] = l * m + c * v + h * b, r[7] = l * g + c * x + h * M, r[2] = u * f + d * _ + p * y, r[5] = u * m + d * v + p * b, r[8] = u * g + d * x + p * M, this
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
		}
		determinant() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				a = t[4],
				s = t[5],
				o = t[6],
				l = t[7],
				c = t[8];
			return e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
		}
		invert() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				a = t[4],
				s = t[5],
				o = t[6],
				l = t[7],
				c = t[8],
				h = c * a - s * l,
				u = s * o - c * r,
				d = l * r - a * o,
				p = e * h + n * u + i * d;
			if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const f = 1 / p;
			return t[0] = h * f, t[1] = (i * l - c * n) * f, t[2] = (s * n - i * a) * f, t[3] = u * f, t[4] = (c * e - i * o) * f, t[5] = (i * r - s * e) * f, t[6] = d * f, t[7] = (n * o - l * e) * f, t[8] = (a * e - n * r) * f, this
		}
		transpose() {
			let t;
			const e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
		}
		getNormalMatrix(t) {
			return this.setFromMatrix4(t)
				.invert()
				.transpose()
		}
		transposeIntoArray(t) {
			const e = this.elements;
			return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
		}
		setUvTransform(t, e, n, i, r, a, s) {
			const o = Math.cos(r),
				l = Math.sin(r);
			return this.set(n * o, n * l, -n * (o * a + l * s) + a + t, -i * l, i * o, -i * (-l * a + o * s) + s + e, 0, 0, 1), this
		}
		scale(t, e) {
			const n = this.elements;
			return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
		}
		rotate(t) {
			const e = Math.cos(t),
				n = Math.sin(t),
				i = this.elements,
				r = i[0],
				a = i[3],
				s = i[6],
				o = i[1],
				l = i[4],
				c = i[7];
			return i[0] = e * r + n * o, i[3] = e * a + n * l, i[6] = e * s + n * c, i[1] = -n * r + e * o, i[4] = -n * a + e * l, i[7] = -n * s + e * c, this
		}
		translate(t, e) {
			const n = this.elements;
			return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
		}
		equals(t) {
			const e = this.elements,
				n = t.elements;
			for (let t = 0; t < 9; t++)
				if (e[t] !== n[t]) return !1;
			return !0
		}
		fromArray(t, e = 0) {
			for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
			return this
		}
		toArray(t = [], e = 0) {
			const n = this.elements;
			return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
		}
		clone() {
			return (new this.constructor)
				.fromArray(this.elements)
		}
	}
	const dt = new G,
		pt = new G,
		ft = new ut;
	class mt {
		constructor(t = new G(1, 0, 0), e = 0) {
			this.isPlane = !0, this.normal = t, this.constant = e
		}
		set(t, e) {
			return this.normal.copy(t), this.constant = e, this
		}
		setComponents(t, e, n, i) {
			return this.normal.set(t, e, n), this.constant = i, this
		}
		setFromNormalAndCoplanarPoint(t, e) {
			return this.normal.copy(t), this.constant = -e.dot(this.normal), this
		}
		setFromCoplanarPoints(t, e, n) {
			const i = dt.subVectors(n, e)
				.cross(pt.subVectors(t, e))
				.normalize();
			return this.setFromNormalAndCoplanarPoint(i, t), this
		}
		copy(t) {
			return this.normal.copy(t.normal), this.constant = t.constant, this
		}
		normalize() {
			const t = 1 / this.normal.length();
			return this.normal.multiplyScalar(t), this.constant *= t, this
		}
		negate() {
			return this.constant *= -1, this.normal.negate(), this
		}
		distanceToPoint(t) {
			return this.normal.dot(t) + this.constant
		}
		distanceToSphere(t) {
			return this.distanceToPoint(t.center) - t.radius
		}
		projectPoint(t, e) {
			return e.copy(this.normal)
				.multiplyScalar(-this.distanceToPoint(t))
				.add(t)
		}
		intersectLine(t, e) {
			const n = t.delta(dt),
				i = this.normal.dot(n);
			if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
			const r = -(t.start.dot(this.normal) + this.constant) / i;
			return r < 0 || r > 1 ? null : e.copy(n)
				.multiplyScalar(r)
				.add(t.start)
		}
		intersectsLine(t) {
			const e = this.distanceToPoint(t.start),
				n = this.distanceToPoint(t.end);
			return e < 0 && n > 0 || n < 0 && e > 0
		}
		intersectsBox(t) {
			return t.intersectsPlane(this)
		}
		intersectsSphere(t) {
			return t.intersectsPlane(this)
		}
		coplanarPoint(t) {
			return t.copy(this.normal)
				.multiplyScalar(-this.constant)
		}
		applyMatrix4(t, e) {
			const n = e || ft.getNormalMatrix(t),
				i = this.coplanarPoint(dt)
				.applyMatrix4(t),
				r = this.normal.applyMatrix3(n)
				.normalize();
			return this.constant = -i.dot(r), this
		}
		translate(t) {
			return this.constant -= t.dot(this.normal), this
		}
		equals(t) {
			return t.normal.equals(this.normal) && t.constant === this.constant
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
	}
	const gt = new ht,
		_t = new G;
	class vt {
		constructor(t = new mt, e = new mt, n = new mt, i = new mt, r = new mt, a = new mt) {
			this.planes = [t, e, n, i, r, a]
		}
		set(t, e, n, i, r, a) {
			const s = this.planes;
			return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(a), this
		}
		copy(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
			return this
		}
		setFromProjectionMatrix(t) {
			const e = this.planes,
				n = t.elements,
				i = n[0],
				r = n[1],
				a = n[2],
				s = n[3],
				o = n[4],
				l = n[5],
				c = n[6],
				h = n[7],
				u = n[8],
				d = n[9],
				p = n[10],
				f = n[11],
				m = n[12],
				g = n[13],
				_ = n[14],
				v = n[15];
			return e[0].setComponents(s - i, h - o, f - u, v - m)
				.normalize(), e[1].setComponents(s + i, h + o, f + u, v + m)
				.normalize(), e[2].setComponents(s + r, h + l, f + d, v + g)
				.normalize(), e[3].setComponents(s - r, h - l, f - d, v - g)
				.normalize(), e[4].setComponents(s - a, h - c, f - p, v - _)
				.normalize(), e[5].setComponents(s + a, h + c, f + p, v + _)
				.normalize(), this
		}
		intersectsObject(t) {
			const e = t.geometry;
			return null === e.boundingSphere && e.computeBoundingSphere(), gt.copy(e.boundingSphere)
				.applyMatrix4(t.matrixWorld), this.intersectsSphere(gt)
		}
		intersectsSprite(t) {
			return gt.center.set(0, 0, 0), gt.radius = .7071067811865476, gt.applyMatrix4(t.matrixWorld), this.intersectsSphere(gt)
		}
		intersectsSphere(t) {
			const e = this.planes,
				n = t.center,
				i = -t.radius;
			for (let t = 0; t < 6; t++)
				if (e[t].distanceToPoint(n) < i) return !1;
			return !0
		}
		intersectsBox(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) {
				const i = e[n];
				if (_t.x = i.normal.x > 0 ? t.max.x : t.min.x, _t.y = i.normal.y > 0 ? t.max.y : t.min.y, _t.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(_t) < 0) return !1
			}
			return !0
		}
		containsPoint(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++)
				if (e[n].distanceToPoint(t) < 0) return !1;
			return !0
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
	}
	class xt {
		constructor() {
			xt.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
		}
		set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
			const g = this.elements;
			return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
		}
		identity() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		}
		clone() {
			return (new xt)
				.fromArray(this.elements)
		}
		copy(t) {
			const e = this.elements,
				n = t.elements;
			return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
		}
		copyPosition(t) {
			const e = this.elements,
				n = t.elements;
			return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
		}
		setFromMatrix3(t) {
			const e = t.elements;
			return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
		}
		extractBasis(t, e, n) {
			return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
		}
		makeBasis(t, e, n) {
			return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
		}
		extractRotation(t) {
			const e = this.elements,
				n = t.elements,
				i = 1 / yt.setFromMatrixColumn(t, 0)
				.length(),
				r = 1 / yt.setFromMatrixColumn(t, 1)
				.length(),
				a = 1 / yt.setFromMatrixColumn(t, 2)
				.length();
			return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		}
		makeRotationFromEuler(t) {
			const e = this.elements,
				n = t.x,
				i = t.y,
				r = t.z,
				a = Math.cos(n),
				s = Math.sin(n),
				o = Math.cos(i),
				l = Math.sin(i),
				c = Math.cos(r),
				h = Math.sin(r);
			if ("XYZ" === t.order) {
				const t = a * c,
					n = a * h,
					i = s * c,
					r = s * h;
				e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -s * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = a * o
			} else if ("YXZ" === t.order) {
				const t = o * c,
					n = o * h,
					i = l * c,
					r = l * h;
				e[0] = t + r * s, e[4] = i * s - n, e[8] = a * l, e[1] = a * h, e[5] = a * c, e[9] = -s, e[2] = n * s - i, e[6] = r + t * s, e[10] = a * o
			} else if ("ZXY" === t.order) {
				const t = o * c,
					n = o * h,
					i = l * c,
					r = l * h;
				e[0] = t - r * s, e[4] = -a * h, e[8] = i + n * s, e[1] = n + i * s, e[5] = a * c, e[9] = r - t * s, e[2] = -a * l, e[6] = s, e[10] = a * o
			} else if ("ZYX" === t.order) {
				const t = a * c,
					n = a * h,
					i = s * c,
					r = s * h;
				e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = s * o, e[10] = a * o
			} else if ("YZX" === t.order) {
				const t = a * o,
					n = a * l,
					i = s * o,
					r = s * l;
				e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = a * c, e[9] = -s * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h
			} else if ("XZY" === t.order) {
				const t = a * o,
					n = a * l,
					i = s * o,
					r = s * l;
				e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = a * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = s * c, e[10] = r * h + t
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		}
		makeRotationFromQuaternion(t) {
			return this.compose(Mt, t, St)
		}
		lookAt(t, e, n) {
			const i = this.elements;
			return Tt.subVectors(t, e), 0 === Tt.lengthSq() && (Tt.z = 1), Tt.normalize(), Et.crossVectors(n, Tt), 0 === Et.lengthSq() && (1 === Math.abs(n.z) ? Tt.x += 1e-4 : Tt.z += 1e-4, Tt.normalize(), Et.crossVectors(n, Tt)), Et.normalize(), wt.crossVectors(Tt, Et), i[0] = Et.x, i[4] = wt.x, i[8] = Tt.x, i[1] = Et.y, i[5] = wt.y, i[9] = Tt.y, i[2] = Et.z, i[6] = wt.z, i[10] = Tt.z, this
		}
		multiply(t) {
			return this.multiplyMatrices(this, t)
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this)
		}
		multiplyMatrices(t, e) {
			const n = t.elements,
				i = e.elements,
				r = this.elements,
				a = n[0],
				s = n[4],
				o = n[8],
				l = n[12],
				c = n[1],
				h = n[5],
				u = n[9],
				d = n[13],
				p = n[2],
				f = n[6],
				m = n[10],
				g = n[14],
				_ = n[3],
				v = n[7],
				x = n[11],
				y = n[15],
				b = i[0],
				M = i[4],
				S = i[8],
				E = i[12],
				w = i[1],
				T = i[5],
				A = i[9],
				R = i[13],
				C = i[2],
				L = i[6],
				P = i[10],
				D = i[14],
				O = i[3],
				N = i[7],
				I = i[11],
				U = i[15];
			return r[0] = a * b + s * w + o * C + l * O, r[4] = a * M + s * T + o * L + l * N, r[8] = a * S + s * A + o * P + l * I, r[12] = a * E + s * R + o * D + l * U, r[1] = c * b + h * w + u * C + d * O, r[5] = c * M + h * T + u * L + d * N, r[9] = c * S + h * A + u * P + d * I, r[13] = c * E + h * R + u * D + d * U, r[2] = p * b + f * w + m * C + g * O, r[6] = p * M + f * T + m * L + g * N, r[10] = p * S + f * A + m * P + g * I, r[14] = p * E + f * R + m * D + g * U, r[3] = _ * b + v * w + x * C + y * O, r[7] = _ * M + v * T + x * L + y * N, r[11] = _ * S + v * A + x * P + y * I, r[15] = _ * E + v * R + x * D + y * U, this
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
		}
		determinant() {
			const t = this.elements,
				e = t[0],
				n = t[4],
				i = t[8],
				r = t[12],
				a = t[1],
				s = t[5],
				o = t[9],
				l = t[13],
				c = t[2],
				h = t[6],
				u = t[10],
				d = t[14];
			return t[3] * (+r * o * h - i * l * h - r * s * u + n * l * u + i * s * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * a * u - i * a * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * s * d - r * a * h + n * a * d + r * s * c - n * l * c) + t[15] * (-i * s * c - e * o * h + e * s * u + i * a * h - n * a * u + n * o * c)
		}
		transpose() {
			const t = this.elements;
			let e;
			return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
		}
		setPosition(t, e, n) {
			const i = this.elements;
			return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
		}
		invert() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				a = t[4],
				s = t[5],
				o = t[6],
				l = t[7],
				c = t[8],
				h = t[9],
				u = t[10],
				d = t[11],
				p = t[12],
				f = t[13],
				m = t[14],
				g = t[15],
				_ = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
				v = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
				x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
				y = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
				b = e * _ + n * v + i * x + r * y;
			if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const M = 1 / b;
			return t[0] = _ * M, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * M, t[2] = (s * m * r - f * o * r + f * i * l - n * m * l - s * i * g + n * o * g) * M, t[3] = (h * o * r - s * u * r - h * i * l + n * u * l + s * i * d - n * o * d) * M, t[4] = v * M, t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * M, t[6] = (p * o * r - a * m * r - p * i * l + e * m * l + a * i * g - e * o * g) * M, t[7] = (a * u * r - c * o * r + c * i * l - e * u * l - a * i * d + e * o * d) * M, t[8] = x * M, t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * M, t[10] = (a * f * r - p * s * r + p * n * l - e * f * l - a * n * g + e * s * g) * M, t[11] = (c * s * r - a * h * r - c * n * l + e * h * l + a * n * d - e * s * d) * M, t[12] = y * M, t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * M, t[14] = (p * s * i - a * f * i - p * n * o + e * f * o + a * n * m - e * s * m) * M, t[15] = (a * h * i - c * s * i + c * n * o - e * h * o - a * n * u + e * s * u) * M, this
		}
		scale(t) {
			const e = this.elements,
				n = t.x,
				i = t.y,
				r = t.z;
			return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
		}
		getMaxScaleOnAxis() {
			const t = this.elements,
				e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
				n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
				i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, n, i))
		}
		makeTranslation(t, e, n) {
			return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
		}
		makeRotationX(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
		}
		makeRotationY(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
		}
		makeRotationZ(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		}
		makeRotationAxis(t, e) {
			const n = Math.cos(e),
				i = Math.sin(e),
				r = 1 - n,
				a = t.x,
				s = t.y,
				o = t.z,
				l = r * a,
				c = r * s;
			return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1), this
		}
		makeScale(t, e, n) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
		}
		makeShear(t, e, n, i, r, a) {
			return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this
		}
		compose(t, e, n) {
			const i = this.elements,
				r = e._x,
				a = e._y,
				s = e._z,
				o = e._w,
				l = r + r,
				c = a + a,
				h = s + s,
				u = r * l,
				d = r * c,
				p = r * h,
				f = a * c,
				m = a * h,
				g = s * h,
				_ = o * l,
				v = o * c,
				x = o * h,
				y = n.x,
				b = n.y,
				M = n.z;
			return i[0] = (1 - (f + g)) * y, i[1] = (d + x) * y, i[2] = (p - v) * y, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (m + _) * b, i[7] = 0, i[8] = (p + v) * M, i[9] = (m - _) * M, i[10] = (1 - (u + f)) * M, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
		}
		decompose(t, e, n) {
			const i = this.elements;
			let r = yt.set(i[0], i[1], i[2])
				.length();
			const a = yt.set(i[4], i[5], i[6])
				.length(),
				s = yt.set(i[8], i[9], i[10])
				.length();
			this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], bt.copy(this);
			const o = 1 / r,
				l = 1 / a,
				c = 1 / s;
			return bt.elements[0] *= o, bt.elements[1] *= o, bt.elements[2] *= o, bt.elements[4] *= l, bt.elements[5] *= l, bt.elements[6] *= l, bt.elements[8] *= c, bt.elements[9] *= c, bt.elements[10] *= c, e.setFromRotationMatrix(bt), n.x = r, n.y = a, n.z = s, this
		}
		makePerspective(t, e, n, i, r, a) {
			const s = this.elements,
				o = 2 * r / (e - t),
				l = 2 * r / (n - i),
				c = (e + t) / (e - t),
				h = (n + i) / (n - i),
				u = -(a + r) / (a - r),
				d = -2 * a * r / (a - r);
			return s[0] = o, s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = h, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = u, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
		}
		makeOrthographic(t, e, n, i, r, a) {
			const s = this.elements,
				o = 1 / (e - t),
				l = 1 / (n - i),
				c = 1 / (a - r),
				h = (e + t) * o,
				u = (n + i) * l,
				d = (a + r) * c;
			return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -h, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -u, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -d, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
		}
		equals(t) {
			const e = this.elements,
				n = t.elements;
			for (let t = 0; t < 16; t++)
				if (e[t] !== n[t]) return !1;
			return !0
		}
		fromArray(t, e = 0) {
			for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
			return this
		}
		toArray(t = [], e = 0) {
			const n = this.elements;
			return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
		}
	}
	const yt = new G,
		bt = new xt,
		Mt = new G(0, 0, 0),
		St = new G(1, 1, 1),
		Et = new G,
		wt = new G,
		Tt = new G;
	class At {
		constructor(t = 0, e = 0) {
			At.prototype.isVector2 = !0, this.x = t, this.y = e
		}
		get width() {
			return this.x
		}
		set width(t) {
			this.x = t
		}
		get height() {
			return this.y
		}
		set height(t) {
			this.y = t
		}
		set(t, e) {
			return this.x = t, this.y = e, this
		}
		setScalar(t) {
			return this.x = t, this.y = t, this
		}
		setX(t) {
			return this.x = t, this
		}
		setY(t) {
			return this.y = t, this
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + t)
			}
		}
		clone() {
			return new this.constructor(this.x, this.y)
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this
		}
		add(t) {
			return this.x += t.x, this.y += t.y, this
		}
		addScalar(t) {
			return this.x += t, this.y += t, this
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this
		}
		sub(t) {
			return this.x -= t.x, this.y -= t.y, this
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t)
		}
		applyMatrix3(t) {
			const e = this.x,
				n = this.y,
				i = t.elements;
			return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
		}
		clamp(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
		}
		clampScalar(t, e) {
			return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1)
				.multiplyScalar(Math.max(t, Math.min(e, n)))
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		}
		roundToZero() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this
		}
		dot(t) {
			return this.x * t.x + this.y * t.y
		}
		cross(t) {
			return this.x * t.y - this.y * t.x
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y)
		}
		normalize() {
			return this.divideScalar(this.length() || 1)
		}
		angle() {
			return Math.atan2(-this.y, -this.x) + Math.PI
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t))
		}
		distanceToSquared(t) {
			const e = this.x - t.x,
				n = this.y - t.y;
			return e * e + n * n
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
		}
		setLength(t) {
			return this.normalize()
				.multiplyScalar(t)
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
		}
		lerpVectors(t, e, n) {
			return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
		}
		equals(t) {
			return t.x === this.x && t.y === this.y
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t
		}
		fromBufferAttribute(t, e) {
			return this.x = t.getX(e), this.y = t.getY(e), this
		}
		rotateAround(t, e) {
			const n = Math.cos(e),
				i = Math.sin(e),
				r = this.x - t.x,
				a = this.y - t.y;
			return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this
		}*[Symbol.iterator]() {
			yield this.x, yield this.y
		}
	}
	class Rt {
		constructor(t = 0, e = 0, n = 0, i = 1) {
			Rt.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i
		}
		get width() {
			return this.z
		}
		set width(t) {
			this.z = t
		}
		get height() {
			return this.w
		}
		set height(t) {
			this.w = t
		}
		set(t, e, n, i) {
			return this.x = t, this.y = e, this.z = n, this.w = i, this
		}
		setScalar(t) {
			return this.x = t, this.y = t, this.z = t, this.w = t, this
		}
		setX(t) {
			return this.x = t, this
		}
		setY(t) {
			return this.y = t, this
		}
		setZ(t) {
			return this.z = t, this
		}
		setW(t) {
			return this.w = t, this
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				case 3:
					this.w = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + t)
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z, this.w)
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
		}
		add(t) {
			return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
		}
		addScalar(t) {
			return this.x += t, this.y += t, this.z += t, this.w += t, this
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
		}
		sub(t) {
			return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
		}
		applyMatrix4(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = this.w,
				a = t.elements;
			return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t)
		}
		setAxisAngleFromQuaternion(t) {
			this.w = 2 * Math.acos(t.w);
			const e = Math.sqrt(1 - t.w * t.w);
			return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
		}
		setAxisAngleFromRotationMatrix(t) {
			let e, n, i, r;
			const a = .01,
				s = .1,
				o = t.elements,
				l = o[0],
				c = o[4],
				h = o[8],
				u = o[1],
				d = o[5],
				p = o[9],
				f = o[2],
				m = o[6],
				g = o[10];
			if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
				if (Math.abs(c + u) < s && Math.abs(h + f) < s && Math.abs(p + m) < s && Math.abs(l + d + g - 3) < s) return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				const t = (l + 1) / 2,
					o = (d + 1) / 2,
					_ = (g + 1) / 2,
					v = (c + u) / 4,
					x = (h + f) / 4,
					y = (p + m) / 4;
				return t > o && t > _ ? t < a ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = v / n, r = x / n) : o > _ ? o < a ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = v / i, r = y / i) : _ < a ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_), n = x / r, i = y / r), this.set(n, i, r, e), this
			}
			let _ = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
			return Math.abs(_) < .001 && (_ = 1), this.x = (m - p) / _, this.y = (h - f) / _, this.z = (u - c) / _, this.w = Math.acos((l + d + g - 1) / 2), this
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
		}
		clamp(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
		}
		clampScalar(t, e) {
			return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1)
				.multiplyScalar(Math.max(t, Math.min(e, n)))
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
		}
		roundToZero() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		}
		normalize() {
			return this.divideScalar(this.length() || 1)
		}
		setLength(t) {
			return this.normalize()
				.multiplyScalar(t)
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
		}
		lerpVectors(t, e, n) {
			return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
		}
		fromBufferAttribute(t, e) {
			return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
		}*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z, yield this.w
		}
	}

	function Ct() {
		let t = null,
			e = !1,
			n = null,
			i = null;

		function r(e, a) {
			n(e, a), i = t.requestAnimationFrame(r)
		}
		return {
			start: function() {
				!0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
			},
			stop: function() {
				t.cancelAnimationFrame(i), e = !1
			},
			setAnimationLoop: function(t) {
				n = t
			},
			setContext: function(e) {
				t = e
			}
		}
	}

	function Lt(t, e) {
		const n = e.isWebGL2,
			i = new WeakMap;
		return {
			get: function(t) {
				return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
			},
			remove: function(e) {
				e.isInterleavedBufferAttribute && (e = e.data);
				const n = i.get(e);
				n && (t.deleteBuffer(n.buffer), i.delete(e))
			},
			update: function(e, r) {
				if (e.isGLBufferAttribute) {
					const t = i.get(e);
					return void((!t || t.version < e.version) && i.set(e, {
						buffer: e.buffer,
						type: e.type,
						bytesPerElement: e.elementSize,
						version: e.version
					}))
				}
				e.isInterleavedBufferAttribute && (e = e.data);
				const a = i.get(e);
				void 0 === a ? i.set(e, function(e, i) {
					const r = e.array,
						a = e.usage,
						s = t.createBuffer();
					let o;
					if (t.bindBuffer(i, s), t.bufferData(i, r, a), e.onUploadCallback(), r instanceof Float32Array) o = t.FLOAT;
					else if (r instanceof Uint16Array)
						if (e.isFloat16BufferAttribute) {
							if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
							o = t.HALF_FLOAT
						} else o = t.UNSIGNED_SHORT;
					else if (r instanceof Int16Array) o = t.SHORT;
					else if (r instanceof Uint32Array) o = t.UNSIGNED_INT;
					else if (r instanceof Int32Array) o = t.INT;
					else if (r instanceof Int8Array) o = t.BYTE;
					else if (r instanceof Uint8Array) o = t.UNSIGNED_BYTE;
					else {
						if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
						o = t.UNSIGNED_BYTE
					}
					return {
						buffer: s,
						type: o,
						bytesPerElement: r.BYTES_PER_ELEMENT,
						version: e.version
					}
				}(e, r)) : a.version < e.version && (function(e, i, r) {
					const a = i.array,
						s = i.updateRange;
					t.bindBuffer(r, e), -1 === s.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), s.count = -1)
				}(a.buffer, e, r), a.version = e.version)
			}
		}
	}
	class Pt {
		addEventListener(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			const n = this._listeners;
			void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
		}
		hasEventListener(t, e) {
			if (void 0 === this._listeners) return !1;
			const n = this._listeners;
			return void 0 !== n[t] && -1 !== n[t].indexOf(e)
		}
		removeEventListener(t, e) {
			if (void 0 === this._listeners) return;
			const n = this._listeners[t];
			if (void 0 !== n) {
				const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
			}
		}
		dispatchEvent(t) {
			if (void 0 === this._listeners) return;
			const e = this._listeners[t.type];
			if (void 0 !== e) {
				t.target = this;
				const n = e.slice(0);
				for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
				t.target = null
			}
		}
	}
	const Dt = new G,
		Ot = new At;
	class Nt {
		constructor(t, e, n) {
			if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = 35044, this.updateRange = {
				offset: 0,
				count: -1
			}, this.version = 0
		}
		onUploadCallback() {}
		set needsUpdate(t) {
			!0 === t && this.version++
		}
		setUsage(t) {
			return this.usage = t, this
		}
		copy(t) {
			return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
		}
		copyAt(t, e, n) {
			t *= this.itemSize, n *= e.itemSize;
			for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
			return this
		}
		copyArray(t) {
			return this.array.set(t), this
		}
		applyMatrix3(t) {
			if (2 === this.itemSize)
				for (let e = 0, n = this.count; e < n; e++) Ot.fromBufferAttribute(this, e), Ot.applyMatrix3(t), this.setXY(e, Ot.x, Ot.y);
			else if (3 === this.itemSize)
				for (let e = 0, n = this.count; e < n; e++) Dt.fromBufferAttribute(this, e), Dt.applyMatrix3(t), this.setXYZ(e, Dt.x, Dt.y, Dt.z);
			return this
		}
		applyMatrix4(t) {
			for (let e = 0, n = this.count; e < n; e++) Dt.fromBufferAttribute(this, e), Dt.applyMatrix4(t), this.setXYZ(e, Dt.x, Dt.y, Dt.z);
			return this
		}
		applyNormalMatrix(t) {
			for (let e = 0, n = this.count; e < n; e++) Dt.fromBufferAttribute(this, e), Dt.applyNormalMatrix(t), this.setXYZ(e, Dt.x, Dt.y, Dt.z);
			return this
		}
		transformDirection(t) {
			for (let e = 0, n = this.count; e < n; e++) Dt.fromBufferAttribute(this, e), Dt.transformDirection(t), this.setXYZ(e, Dt.x, Dt.y, Dt.z);
			return this
		}
		set(t, e = 0) {
			return this.array.set(t, e), this
		}
		getX(t) {
			let e = this.array[t * this.itemSize];
			return this.normalized && (e = B(e, this.array)), e
		}
		setX(t, e) {
			return this.normalized && (e = H(e, this.array)), this.array[t * this.itemSize] = e, this
		}
		getY(t) {
			let e = this.array[t * this.itemSize + 1];
			return this.normalized && (e = B(e, this.array)), e
		}
		setY(t, e) {
			return this.normalized && (e = H(e, this.array)), this.array[t * this.itemSize + 1] = e, this
		}
		getZ(t) {
			let e = this.array[t * this.itemSize + 2];
			return this.normalized && (e = B(e, this.array)), e
		}
		setZ(t, e) {
			return this.normalized && (e = H(e, this.array)), this.array[t * this.itemSize + 2] = e, this
		}
		getW(t) {
			let e = this.array[t * this.itemSize + 3];
			return this.normalized && (e = B(e, this.array)), e
		}
		setW(t, e) {
			return this.normalized && (e = H(e, this.array)), this.array[t * this.itemSize + 3] = e, this
		}
		setXY(t, e, n) {
			return t *= this.itemSize, this.normalized && (e = H(e, this.array), n = H(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this
		}
		setXYZ(t, e, n, i) {
			return t *= this.itemSize, this.normalized && (e = H(e, this.array), n = H(n, this.array), i = H(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
		}
		setXYZW(t, e, n, i, r) {
			return t *= this.itemSize, this.normalized && (e = H(e, this.array), n = H(n, this.array), i = H(i, this.array), r = H(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
		}
		onUpload(t) {
			return this.onUploadCallback = t, this
		}
		clone() {
			return new this.constructor(this.array, this.itemSize)
				.copy(this)
		}
		toJSON() {
			const t = {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: Array.from(this.array),
				normalized: this.normalized
			};
			return "" !== this.name && (t.name = this.name), 35044 !== this.usage && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
		}
		copyColorsArray() {
			console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
		}
		copyVector2sArray() {
			console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
		}
		copyVector3sArray() {
			console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
		}
		copyVector4sArray() {
			console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
		}
	}
	class It extends Nt {
		constructor(t, e, n) {
			super(new Uint16Array(t), e, n)
		}
	}
	class Ut extends Nt {
		constructor(t, e, n) {
			super(new Uint32Array(t), e, n)
		}
	}
	class Ft extends Nt {
		constructor(t, e, n) {
			super(new Float32Array(t), e, n)
		}
	}
	const zt = new xt,
		Bt = new k;
	class Ht {
		constructor(t = 0, e = 0, n = 0, i = Ht.DefaultOrder) {
			this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i
		}
		get x() {
			return this._x
		}
		set x(t) {
			this._x = t, this._onChangeCallback()
		}
		get y() {
			return this._y
		}
		set y(t) {
			this._y = t, this._onChangeCallback()
		}
		get z() {
			return this._z
		}
		set z(t) {
			this._z = t, this._onChangeCallback()
		}
		get order() {
			return this._order
		}
		set order(t) {
			this._order = t, this._onChangeCallback()
		}
		set(t, e, n, i = this._order) {
			return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._order)
		}
		copy(t) {
			return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
		}
		setFromRotationMatrix(t, e = this._order, n = !0) {
			const i = t.elements,
				r = i[0],
				a = i[4],
				s = i[8],
				o = i[1],
				l = i[5],
				c = i[9],
				h = i[2],
				u = i[6],
				d = i[10];
			switch (e) {
				case "XYZ":
					this._y = Math.asin(I(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, l), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-I(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(I(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
					break;
				case "ZYX":
					this._y = Math.asin(-I(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
					break;
				case "YZX":
					this._z = Math.asin(I(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(s, d));
					break;
				case "XZY":
					this._z = Math.asin(-I(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
					break;
				default:
					console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
			}
			return this._order = e, !0 === n && this._onChangeCallback(), this
		}
		setFromQuaternion(t, e, n) {
			return zt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(zt, e, n)
		}
		setFromVector3(t, e = this._order) {
			return this.set(t.x, t.y, t.z, e)
		}
		reorder(t) {
			return Bt.setFromEuler(this), this.setFromQuaternion(Bt, t)
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
		}
		fromArray(t) {
			return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
		}
		toArray(t = [], e = 0) {
			return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
		}
		_onChange(t) {
			return this._onChangeCallback = t, this
		}
		_onChangeCallback() {}*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._order
		}
		toVector3() {
			console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
		}
	}
	Ht.DefaultOrder = "XYZ", Ht.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
	class kt {
		constructor() {
			this.mask = 1
		}
		set(t) {
			this.mask = (1 << t | 0) >>> 0
		}
		enable(t) {
			this.mask |= 1 << t | 0
		}
		enableAll() {
			this.mask = -1
		}
		toggle(t) {
			this.mask ^= 1 << t | 0
		}
		disable(t) {
			this.mask &= ~(1 << t | 0)
		}
		disableAll() {
			this.mask = 0
		}
		test(t) {
			return 0 != (this.mask & t.mask)
		}
		isEnabled(t) {
			return 0 != (this.mask & (1 << t | 0))
		}
	}
	let Gt = 0;
	const Vt = new G,
		Wt = new k,
		Xt = new xt,
		jt = new G,
		qt = new G,
		Yt = new G,
		Zt = new k,
		Jt = new G(1, 0, 0),
		Kt = new G(0, 1, 0),
		Qt = new G(0, 0, 1),
		$t = {
			type: "added"
		},
		te = {
			type: "removed"
		};
	class ee extends Pt {
		constructor() {
			super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
				value: Gt++
			}), this.uuid = N(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ee.DefaultUp.clone();
			const t = new G,
				e = new Ht,
				n = new k,
				i = new G(1, 1, 1);
			e._onChange((function() {
				n.setFromEuler(e, !1)
			})), n._onChange((function() {
				e.setFromQuaternion(n, void 0, !1)
			})), Object.defineProperties(this, {
				position: {
					configurable: !0,
					enumerable: !0,
					value: t
				},
				rotation: {
					configurable: !0,
					enumerable: !0,
					value: e
				},
				quaternion: {
					configurable: !0,
					enumerable: !0,
					value: n
				},
				scale: {
					configurable: !0,
					enumerable: !0,
					value: i
				},
				modelViewMatrix: {
					value: new xt
				},
				normalMatrix: {
					value: new ut
				}
			}), this.matrix = new xt, this.matrixWorld = new xt, this.matrixAutoUpdate = ee.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = ee.DefaultMatrixWorldAutoUpdate, this.layers = new kt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
		}
		onBeforeRender() {}
		onAfterRender() {}
		applyMatrix4(t) {
			this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
		}
		applyQuaternion(t) {
			return this.quaternion.premultiply(t), this
		}
		setRotationFromAxisAngle(t, e) {
			this.quaternion.setFromAxisAngle(t, e)
		}
		setRotationFromEuler(t) {
			this.quaternion.setFromEuler(t, !0)
		}
		setRotationFromMatrix(t) {
			this.quaternion.setFromRotationMatrix(t)
		}
		setRotationFromQuaternion(t) {
			this.quaternion.copy(t)
		}
		rotateOnAxis(t, e) {
			return Wt.setFromAxisAngle(t, e), this.quaternion.multiply(Wt), this
		}
		rotateOnWorldAxis(t, e) {
			return Wt.setFromAxisAngle(t, e), this.quaternion.premultiply(Wt), this
		}
		rotateX(t) {
			return this.rotateOnAxis(Jt, t)
		}
		rotateY(t) {
			return this.rotateOnAxis(Kt, t)
		}
		rotateZ(t) {
			return this.rotateOnAxis(Qt, t)
		}
		translateOnAxis(t, e) {
			return Vt.copy(t)
				.applyQuaternion(this.quaternion), this.position.add(Vt.multiplyScalar(e)), this
		}
		translateX(t) {
			return this.translateOnAxis(Jt, t)
		}
		translateY(t) {
			return this.translateOnAxis(Kt, t)
		}
		translateZ(t) {
			return this.translateOnAxis(Qt, t)
		}
		localToWorld(t) {
			return t.applyMatrix4(this.matrixWorld)
		}
		worldToLocal(t) {
			return t.applyMatrix4(Xt.copy(this.matrixWorld)
				.invert())
		}
		lookAt(t, e, n) {
			t.isVector3 ? jt.copy(t) : jt.set(t, e, n);
			const i = this.parent;
			this.updateWorldMatrix(!0, !1), qt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(qt, jt, this.up) : Xt.lookAt(jt, qt, this.up), this.quaternion.setFromRotationMatrix(Xt), i && (Xt.extractRotation(i.matrixWorld), Wt.setFromRotationMatrix(Xt), this.quaternion.premultiply(Wt.invert()))
		}
		add(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this
			}
			return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent($t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
		}
		remove(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this
			}
			const e = this.children.indexOf(t);
			return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(te)), this
		}
		removeFromParent() {
			const t = this.parent;
			return null !== t && t.remove(this), this
		}
		clear() {
			for (let t = 0; t < this.children.length; t++) {
				const e = this.children[t];
				e.parent = null, e.dispatchEvent(te)
			}
			return this.children.length = 0, this
		}
		attach(t) {
			return this.updateWorldMatrix(!0, !1), Xt.copy(this.matrixWorld)
				.invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Xt.multiply(t.parent.matrixWorld)), t.applyMatrix4(Xt), this.add(t), t.updateWorldMatrix(!1, !0), this
		}
		getObjectById(t) {
			return this.getObjectByProperty("id", t)
		}
		getObjectByName(t) {
			return this.getObjectByProperty("name", t)
		}
		getObjectByProperty(t, e) {
			if (this[t] === e) return this;
			for (let n = 0, i = this.children.length; n < i; n++) {
				const i = this.children[n].getObjectByProperty(t, e);
				if (void 0 !== i) return i
			}
		}
		getWorldPosition(t) {
			return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
		}
		getWorldQuaternion(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(qt, t, Yt), t
		}
		getWorldScale(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(qt, Zt, t), t
		}
		getWorldDirection(t) {
			this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(e[8], e[9], e[10])
				.normalize()
		}
		raycast() {}
		traverse(t) {
			t(this);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
		}
		traverseVisible(t) {
			if (!1 === this.visible) return;
			t(this);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
		}
		traverseAncestors(t) {
			const e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t))
		}
		updateMatrix() {
			this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
		}
		updateMatrixWorld(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) {
				const i = e[n];
				!0 !== i.matrixWorldAutoUpdate && !0 !== t || i.updateMatrixWorld(t)
			}
		}
		updateWorldMatrix(t, e) {
			const n = this.parent;
			if (!0 === t && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
				const t = this.children;
				for (let e = 0, n = t.length; e < n; e++) {
					const n = t[e];
					!0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0)
				}
			}
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t,
				n = {};
			e && (t = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			}, n.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			const i = {};

			function r(e, n) {
				return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
			}
			if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t)
				.uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t)
				.uuid);
			else if (this.isMesh || this.isLine || this.isPoints) {
				i.geometry = r(t.geometries, this.geometry);
				const e = this.geometry.parameters;
				if (void 0 !== e && void 0 !== e.shapes) {
					const n = e.shapes;
					if (Array.isArray(n))
						for (let e = 0, i = n.length; e < i; e++) {
							const i = n[e];
							r(t.shapes, i)
						} else r(t.shapes, n)
				}
			}
			if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
				if (Array.isArray(this.material)) {
					const e = [];
					for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
					i.material = e
				} else i.material = r(t.materials, this.material);
			if (this.children.length > 0) {
				i.children = [];
				for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t)
					.object)
			}
			if (this.animations.length > 0) {
				i.animations = [];
				for (let e = 0; e < this.animations.length; e++) {
					const n = this.animations[e];
					i.animations.push(r(t.animations, n))
				}
			}
			if (e) {
				const e = a(t.geometries),
					i = a(t.materials),
					r = a(t.textures),
					s = a(t.images),
					o = a(t.shapes),
					l = a(t.skeletons),
					c = a(t.animations),
					h = a(t.nodes);
				e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h)
			}
			return n.object = i, n;

			function a(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					delete i.metadata, e.push(i)
				}
				return e
			}
		}
		clone(t) {
			return (new this.constructor)
				.copy(this, t)
		}
		copy(t, e = !0) {
			if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
				for (let e = 0; e < t.children.length; e++) {
					const n = t.children[e];
					this.add(n.clone())
				}
			return this
		}
	}

	function ne(t) {
		for (let e = t.length - 1; e >= 0; --e)
			if (t[e] >= 65535) return !0;
		return !1
	}

	function ie(t) {
		return document.createElementNS("http://www.w3.org/1999/xhtml", t)
	}
	ee.DefaultUp = new G(0, 1, 0), ee.DefaultMatrixAutoUpdate = !0, ee.DefaultMatrixWorldAutoUpdate = !0, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
	let re = 0;
	const ae = new xt,
		se = new ee,
		oe = new G,
		le = new X,
		ce = new X,
		he = new G;
	class ue extends Pt {
		constructor() {
			super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
				value: re++
			}), this.uuid = N(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
				start: 0,
				count: 1 / 0
			}, this.userData = {}
		}
		getIndex() {
			return this.index
		}
		setIndex(t) {
			return Array.isArray(t) ? this.index = new(ne(t) ? Ut : It)(t, 1) : this.index = t, this
		}
		getAttribute(t) {
			return this.attributes[t]
		}
		setAttribute(t, e) {
			return this.attributes[t] = e, this
		}
		deleteAttribute(t) {
			return delete this.attributes[t], this
		}
		hasAttribute(t) {
			return void 0 !== this.attributes[t]
		}
		addGroup(t, e, n = 0) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: n
			})
		}
		clearGroups() {
			this.groups = []
		}
		setDrawRange(t, e) {
			this.drawRange.start = t, this.drawRange.count = e
		}
		applyMatrix4(t) {
			const e = this.attributes.position;
			void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
			const n = this.attributes.normal;
			if (void 0 !== n) {
				const e = (new ut)
					.getNormalMatrix(t);
				n.applyNormalMatrix(e), n.needsUpdate = !0
			}
			const i = this.attributes.tangent;
			return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
		}
		applyQuaternion(t) {
			return ae.makeRotationFromQuaternion(t), this.applyMatrix4(ae), this
		}
		rotateX(t) {
			return ae.makeRotationX(t), this.applyMatrix4(ae), this
		}
		rotateY(t) {
			return ae.makeRotationY(t), this.applyMatrix4(ae), this
		}
		rotateZ(t) {
			return ae.makeRotationZ(t), this.applyMatrix4(ae), this
		}
		translate(t, e, n) {
			return ae.makeTranslation(t, e, n), this.applyMatrix4(ae), this
		}
		scale(t, e, n) {
			return ae.makeScale(t, e, n), this.applyMatrix4(ae), this
		}
		lookAt(t) {
			return se.lookAt(t), se.updateMatrix(), this.applyMatrix4(se.matrix), this
		}
		center() {
			return this.computeBoundingBox(), this.boundingBox.getCenter(oe)
				.negate(), this.translate(oe.x, oe.y, oe.z), this
		}
		setFromPoints(t) {
			const e = [];
			for (let n = 0, i = t.length; n < i; n++) {
				const i = t[n];
				e.push(i.x, i.y, i.z || 0)
			}
			return this.setAttribute("position", new Ft(e, 3)), this
		}
		computeBoundingBox() {
			null === this.boundingBox && (this.boundingBox = new X);
			const t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new G(-1 / 0, -1 / 0, -1 / 0), new G(1 / 0, 1 / 0, 1 / 0));
			if (void 0 !== t) {
				if (this.boundingBox.setFromBufferAttribute(t), e)
					for (let t = 0, n = e.length; t < n; t++) {
						const n = e[t];
						le.setFromBufferAttribute(n), this.morphTargetsRelative ? (he.addVectors(this.boundingBox.min, le.min), this.boundingBox.expandByPoint(he), he.addVectors(this.boundingBox.max, le.max), this.boundingBox.expandByPoint(he)) : (this.boundingBox.expandByPoint(le.min), this.boundingBox.expandByPoint(le.max))
					}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		}
		computeBoundingSphere() {
			null === this.boundingSphere && (this.boundingSphere = new ht);
			const t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new G, 1 / 0);
			if (t) {
				const n = this.boundingSphere.center;
				if (le.setFromBufferAttribute(t), e)
					for (let t = 0, n = e.length; t < n; t++) {
						const n = e[t];
						ce.setFromBufferAttribute(n), this.morphTargetsRelative ? (he.addVectors(le.min, ce.min), le.expandByPoint(he), he.addVectors(le.max, ce.max), le.expandByPoint(he)) : (le.expandByPoint(ce.min), le.expandByPoint(ce.max))
					}
				le.getCenter(n);
				let i = 0;
				for (let e = 0, r = t.count; e < r; e++) he.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(he));
				if (e)
					for (let r = 0, a = e.length; r < a; r++) {
						const a = e[r],
							s = this.morphTargetsRelative;
						for (let e = 0, r = a.count; e < r; e++) he.fromBufferAttribute(a, e), s && (oe.fromBufferAttribute(t, e), he.add(oe)), i = Math.max(i, n.distanceToSquared(he))
					}
				this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
			}
		}
		computeTangents() {
			const t = this.index,
				e = this.attributes;
			if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			const n = t.array,
				i = e.position.array,
				r = e.normal.array,
				a = e.uv.array,
				s = i.length / 3;
			!1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Nt(new Float32Array(4 * s), 4));
			const o = this.getAttribute("tangent")
				.array,
				l = [],
				c = [];
			for (let t = 0; t < s; t++) l[t] = new G, c[t] = new G;
			const h = new G,
				u = new G,
				d = new G,
				p = new At,
				f = new At,
				m = new At,
				g = new G,
				_ = new G;

			function v(t, e, n) {
				h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(a, 2 * t), f.fromArray(a, 2 * e), m.fromArray(a, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
				const r = 1 / (f.x * m.y - m.x * f.y);
				isFinite(r) && (g.copy(u)
					.multiplyScalar(m.y)
					.addScaledVector(d, -f.y)
					.multiplyScalar(r), _.copy(d)
					.multiplyScalar(f.x)
					.addScaledVector(u, -m.x)
					.multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(_), c[e].add(_), c[n].add(_))
			}
			let x = this.groups;
			0 === x.length && (x = [{
				start: 0,
				count: n.length
			}]);
			for (let t = 0, e = x.length; t < e; ++t) {
				const e = x[t],
					i = e.start;
				for (let t = i, r = i + e.count; t < r; t += 3) v(n[t + 0], n[t + 1], n[t + 2])
			}
			const y = new G,
				b = new G,
				M = new G,
				S = new G;

			function E(t) {
				M.fromArray(r, 3 * t), S.copy(M);
				const e = l[t];
				y.copy(e), y.sub(M.multiplyScalar(M.dot(e)))
					.normalize(), b.crossVectors(S, e);
				const n = b.dot(c[t]) < 0 ? -1 : 1;
				o[4 * t] = y.x, o[4 * t + 1] = y.y, o[4 * t + 2] = y.z, o[4 * t + 3] = n
			}
			for (let t = 0, e = x.length; t < e; ++t) {
				const e = x[t],
					i = e.start;
				for (let t = i, r = i + e.count; t < r; t += 3) E(n[t + 0]), E(n[t + 1]), E(n[t + 2])
			}
		}
		computeVertexNormals() {
			const t = this.index,
				e = this.getAttribute("position");
			if (void 0 !== e) {
				let n = this.getAttribute("normal");
				if (void 0 === n) n = new Nt(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
				else
					for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
				const i = new G,
					r = new G,
					a = new G,
					s = new G,
					o = new G,
					l = new G,
					c = new G,
					h = new G;
				if (t)
					for (let u = 0, d = t.count; u < d; u += 3) {
						const d = t.getX(u + 0),
							p = t.getX(u + 1),
							f = t.getX(u + 2);
						i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), a.fromBufferAttribute(e, f), c.subVectors(a, r), h.subVectors(i, r), c.cross(h), s.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), s.add(c), o.add(c), l.add(c), n.setXYZ(d, s.x, s.y, s.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(f, l.x, l.y, l.z)
					} else
						for (let t = 0, s = e.count; t < s; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), a.fromBufferAttribute(e, t + 2), c.subVectors(a, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), n.setXYZ(t + 2, c.x, c.y, c.z);
				this.normalizeNormals(), n.needsUpdate = !0
			}
		}
		merge() {
			return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this
		}
		normalizeNormals() {
			const t = this.attributes.normal;
			for (let e = 0, n = t.count; e < n; e++) he.fromBufferAttribute(t, e), he.normalize(), t.setXYZ(e, he.x, he.y, he.z)
		}
		toNonIndexed() {
			function t(t, e) {
				const n = t.array,
					i = t.itemSize,
					r = t.normalized,
					a = new n.constructor(e.length * i);
				let s = 0,
					o = 0;
				for (let r = 0, l = e.length; r < l; r++) {
					s = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
					for (let t = 0; t < i; t++) a[o++] = n[s++]
				}
				return new Nt(a, i, r)
			}
			if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
			const e = new ue,
				n = this.index.array,
				i = this.attributes;
			for (const r in i) {
				const a = t(i[r], n);
				e.setAttribute(r, a)
			}
			const r = this.morphAttributes;
			for (const i in r) {
				const a = [],
					s = r[i];
				for (let e = 0, i = s.length; e < i; e++) {
					const i = t(s[e], n);
					a.push(i)
				}
				e.morphAttributes[i] = a
			}
			e.morphTargetsRelative = this.morphTargetsRelative;
			const a = this.groups;
			for (let t = 0, n = a.length; t < n; t++) {
				const n = a[t];
				e.addGroup(n.start, n.count, n.materialIndex)
			}
			return e
		}
		toJSON() {
			const t = {
				metadata: {
					version: 4.5,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData)
				.length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
				const e = this.parameters;
				for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
				return t
			}
			t.data = {
				attributes: {}
			};
			const e = this.index;
			null !== e && (t.data.index = {
				type: e.array.constructor.name,
				array: Array.prototype.slice.call(e.array)
			});
			const n = this.attributes;
			for (const e in n) {
				const i = n[e];
				t.data.attributes[e] = i.toJSON(t.data)
			}
			const i = {};
			let r = !1;
			for (const e in this.morphAttributes) {
				const n = this.morphAttributes[e],
					a = [];
				for (let e = 0, i = n.length; e < i; e++) {
					const i = n[e];
					a.push(i.toJSON(t.data))
				}
				a.length > 0 && (i[e] = a, r = !0)
			}
			r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
			const a = this.groups;
			a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
			const s = this.boundingSphere;
			return null !== s && (t.data.boundingSphere = {
				center: s.center.toArray(),
				radius: s.radius
			}), t
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
			const e = {};
			this.name = t.name;
			const n = t.index;
			null !== n && this.setIndex(n.clone(e));
			const i = t.attributes;
			for (const t in i) {
				const n = i[t];
				this.setAttribute(t, n.clone(e))
			}
			const r = t.morphAttributes;
			for (const t in r) {
				const n = [],
					i = r[t];
				for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
				this.morphAttributes[t] = n
			}
			this.morphTargetsRelative = t.morphTargetsRelative;
			const a = t.groups;
			for (let t = 0, e = a.length; t < e; t++) {
				const e = a[t];
				this.addGroup(e.start, e.count, e.materialIndex)
			}
			const s = t.boundingBox;
			null !== s && (this.boundingBox = s.clone());
			const o = t.boundingSphere;
			return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this
		}
		dispose() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}
	class de extends ue {
		constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
			super(), this.type = "BoxGeometry", this.parameters = {
				width: t,
				height: e,
				depth: n,
				widthSegments: i,
				heightSegments: r,
				depthSegments: a
			};
			const s = this;
			i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
			const o = [],
				l = [],
				c = [],
				h = [];
			let u = 0,
				d = 0;

			function p(t, e, n, i, r, a, p, f, m, g, _) {
				const v = a / m,
					x = p / g,
					y = a / 2,
					b = p / 2,
					M = f / 2,
					S = m + 1,
					E = g + 1;
				let w = 0,
					T = 0;
				const A = new G;
				for (let a = 0; a < E; a++) {
					const s = a * x - b;
					for (let o = 0; o < S; o++) {
						const u = o * v - y;
						A[t] = u * i, A[e] = s * r, A[n] = M, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / m), h.push(1 - a / g), w += 1
					}
				}
				for (let t = 0; t < g; t++)
					for (let e = 0; e < m; e++) {
						const n = u + e + S * t,
							i = u + e + S * (t + 1),
							r = u + (e + 1) + S * (t + 1),
							a = u + (e + 1) + S * t;
						o.push(n, i, a), o.push(i, r, a), T += 6
					}
				s.addGroup(d, T, _), d += T, u += w
			}
			p("z", "y", "x", -1, -1, n, e, t, a, r, 0), p("z", "y", "x", 1, -1, n, e, -t, a, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, a, 2), p("x", "z", "y", 1, -1, t, n, -e, i, a, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Ft(l, 3)), this.setAttribute("normal", new Ft(c, 3)), this.setAttribute("uv", new Ft(h, 2))
		}
		static fromJSON(t) {
			return new de(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
		}
	}
	class pe extends ue {
		constructor(t = 1, e = 1, n = 1, i = 1) {
			super(), this.type = "PlaneGeometry", this.parameters = {
				width: t,
				height: e,
				widthSegments: n,
				heightSegments: i
			};
			const r = t / 2,
				a = e / 2,
				s = Math.floor(n),
				o = Math.floor(i),
				l = s + 1,
				c = o + 1,
				h = t / s,
				u = e / o,
				d = [],
				p = [],
				f = [],
				m = [];
			for (let t = 0; t < c; t++) {
				const e = t * u - a;
				for (let n = 0; n < l; n++) {
					const i = n * h - r;
					p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / o)
				}
			}
			for (let t = 0; t < o; t++)
				for (let e = 0; e < s; e++) {
					const n = e + l * t,
						i = e + l * (t + 1),
						r = e + 1 + l * (t + 1),
						a = e + 1 + l * t;
					d.push(n, i, a), d.push(i, r, a)
				}
			this.setIndex(d), this.setAttribute("position", new Ft(p, 3)), this.setAttribute("normal", new Ft(f, 3)), this.setAttribute("uv", new Ft(m, 2))
		}
		static fromJSON(t) {
			return new pe(t.width, t.height, t.widthSegments, t.heightSegments)
		}
	}
	let fe = 0;
	class me extends Pt {
		constructor() {
			super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
				value: fe++
			}), this.uuid = N(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = R, this.stencilZFail = R, this.stencilZPass = R, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
		}
		get alphaTest() {
			return this._alphaTest
		}
		set alphaTest(t) {
			this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
		}
		onBuild() {}
		onBeforeRender() {}
		onBeforeCompile() {}
		customProgramCacheKey() {
			return this.onBeforeCompile.toString()
		}
		setValues(t) {
			if (void 0 !== t)
				for (const e in t) {
					const n = t[e];
					if (void 0 === n) {
						console.warn("THREE.Material: '" + e + "' parameter is undefined.");
						continue
					}
					const i = this[e];
					void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
				}
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			e && (t = {
				textures: {},
				images: {}
			});
			const n = {
				metadata: {
					version: 4.5,
					type: "Material",
					generator: "Material.toJSON"
				}
			};

			function i(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					delete i.metadata, e.push(i)
				}
				return e
			}
			if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t)
				.uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t)
				.uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t)
				.uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t)
				.uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t)
				.uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t)
				.uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t)
				.uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t)
				.uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t)
				.uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t)
				.uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t)
				.uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t)
				.uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t)
				.uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t)
				.uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t)
				.uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t)
				.uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t)
				.uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t)
				.uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t)
				.uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t)
				.uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t)
				.uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t)
				.uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t)
				.uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
				const e = i(t.textures),
					r = i(t.images);
				e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
			}
			return n
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
			const e = t.clippingPlanes;
			let n = null;
			if (null !== e) {
				const t = e.length;
				n = new Array(t);
				for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
			}
			return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
		}
		dispose() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
		set needsUpdate(t) {
			!0 === t && this.version++
		}
	}

	function ge(t) {
		const e = {};
		for (const n in t) {
			e[n] = {};
			for (const i in t[n]) {
				const r = t[n][i];
				r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
			}
		}
		return e
	}

	function _e(t) {
		const e = {};
		for (let n = 0; n < t.length; n++) {
			const i = ge(t[n]);
			for (const t in i) e[t] = i[t]
		}
		return e
	}
	const ve = {
		clone: ge,
		merge: _e
	};
	class xe extends me {
		constructor(t) {
			super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n", this.fragmentShader = "\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
				derivatives: !1,
				fragDepth: !1,
				drawBuffers: !1,
				shaderTextureLOD: !1
			}, this.defaultAttributeValues = {
				color: [1, 1, 1],
				uv: [0, 0],
				uv2: [0, 0]
			}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t)
		}
		copy(t) {
			return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ge(t.uniforms), this.uniformsGroups = function(t) {
				const e = [];
				for (let n = 0; n < t.length; n++) e.push(t[n].clone());
				return e
			}(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
		}
		toJSON(t) {
			const e = super.toJSON(t);
			e.glslVersion = this.glslVersion, e.uniforms = {};
			for (const n in this.uniforms) {
				const i = this.uniforms[n].value;
				i && i.isTexture ? e.uniforms[n] = {
					type: "t",
					value: i.toJSON(t)
						.uuid
				} : i && i.isColor ? e.uniforms[n] = {
					type: "c",
					value: i.getHex()
				} : i && i.isVector2 ? e.uniforms[n] = {
					type: "v2",
					value: i.toArray()
				} : i && i.isVector3 ? e.uniforms[n] = {
					type: "v3",
					value: i.toArray()
				} : i && i.isVector4 ? e.uniforms[n] = {
					type: "v4",
					value: i.toArray()
				} : i && i.isMatrix3 ? e.uniforms[n] = {
					type: "m3",
					value: i.toArray()
				} : i && i.isMatrix4 ? e.uniforms[n] = {
					type: "m4",
					value: i.toArray()
				} : e.uniforms[n] = {
					value: i
				}
			}
			Object.keys(this.defines)
				.length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
			const n = {};
			for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
			return Object.keys(n)
				.length > 0 && (e.extensions = n), e
		}
	}

	function ye(t) {
		return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
	}

	function be(t) {
		return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
	}
	const Me = {
			[T]: {
				[A]: ye
			},
			[A]: {
				[T]: be
			}
		},
		Se = {
			legacyMode: !0,
			get workingColorSpace() {
				return A
			},
			set workingColorSpace(t) {
				console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
			},
			convert: function(t, e, n) {
				if (this.legacyMode || e === n || !e || !n) return t;
				if (Me[e] && void 0 !== Me[e][n]) {
					const i = Me[e][n];
					return t.r = i(t.r), t.g = i(t.g), t.b = i(t.b), t
				}
				throw new Error("Unsupported color space conversion.")
			},
			fromWorkingColorSpace: function(t, e) {
				return this.convert(t, this.workingColorSpace, e)
			},
			toWorkingColorSpace: function(t, e) {
				return this.convert(t, e, this.workingColorSpace)
			}
		},
		Ee = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		},
		we = {
			r: 0,
			g: 0,
			b: 0
		},
		Te = {
			h: 0,
			s: 0,
			l: 0
		},
		Ae = {
			h: 0,
			s: 0,
			l: 0
		};

	function Re(t, e, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
	}

	function Ce(t, e) {
		return e.r = t.r, e.g = t.g, e.b = t.b, e
	}
	class Le {
		constructor(t, e, n) {
			return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
		}
		set(t) {
			return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
		}
		setScalar(t) {
			return this.r = t, this.g = t, this.b = t, this
		}
		setHex(t, e = "srgb") {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, Se.toWorkingColorSpace(this, e), this
		}
		setRGB(t, e, n, i = "srgb-linear") {
			return this.r = t, this.g = e, this.b = n, Se.toWorkingColorSpace(this, i), this
		}
		setHSL(t, e, n, i = "srgb-linear") {
			if (t = (t % (r = 1) + r) % r, e = I(e, 0, 1), n = I(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
			else {
				const i = n <= .5 ? n * (1 + e) : n + e - n * e,
					r = 2 * n - i;
				this.r = Re(r, i, t + 1 / 3), this.g = Re(r, i, t), this.b = Re(r, i, t - 1 / 3)
			}
			var r;
			return Se.toWorkingColorSpace(this, i), this
		}
		setStyle(t, e = "srgb") {
			function n(e) {
				void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
			}
			let i;
			if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
				let t;
				const r = i[1],
					a = i[2];
				switch (r) {
					case "rgb":
					case "rgba":
						if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, Se.toWorkingColorSpace(this, e), n(t[4]), this;
						if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, Se.toWorkingColorSpace(this, e), n(t[4]), this;
						break;
					case "hsl":
					case "hsla":
						if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
							const i = parseFloat(t[1]) / 360,
								r = parseFloat(t[2]) / 100,
								a = parseFloat(t[3]) / 100;
							return n(t[4]), this.setHSL(i, r, a, e)
						}
				}
			} else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
				const t = i[1],
					n = t.length;
				if (3 === n) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, Se.toWorkingColorSpace(this, e), this;
				if (6 === n) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, Se.toWorkingColorSpace(this, e), this
			}
			return t && t.length > 0 ? this.setColorName(t, e) : this
		}
		setColorName(t, e = "srgb") {
			const n = Ee[t.toLowerCase()];
			return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this
		}
		clone() {
			return new this.constructor(this.r, this.g, this.b)
		}
		copy(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this
		}
		copySRGBToLinear(t) {
			return this.r = ye(t.r), this.g = ye(t.g), this.b = ye(t.b), this
		}
		copyLinearToSRGB(t) {
			return this.r = be(t.r), this.g = be(t.g), this.b = be(t.b), this
		}
		convertSRGBToLinear() {
			return this.copySRGBToLinear(this), this
		}
		convertLinearToSRGB() {
			return this.copyLinearToSRGB(this), this
		}
		getHex(t = "srgb") {
			return Se.fromWorkingColorSpace(Ce(this, we), t), I(255 * we.r, 0, 255) << 16 ^ I(255 * we.g, 0, 255) << 8 ^ I(255 * we.b, 0, 255) << 0
		}
		getHexString(t = "srgb") {
			return ("000000" + this.getHex(t)
					.toString(16))
				.slice(-6)
		}
		getHSL(t, e = "srgb-linear") {
			Se.fromWorkingColorSpace(Ce(this, we), e);
			const n = we.r,
				i = we.g,
				r = we.b,
				a = Math.max(n, i, r),
				s = Math.min(n, i, r);
			let o, l;
			const c = (s + a) / 2;
			if (s === a) o = 0, l = 0;
			else {
				const t = a - s;
				switch (l = c <= .5 ? t / (a + s) : t / (2 - a - s), a) {
					case n:
						o = (i - r) / t + (i < r ? 6 : 0);
						break;
					case i:
						o = (r - n) / t + 2;
						break;
					case r:
						o = (n - i) / t + 4
				}
				o /= 6
			}
			return t.h = o, t.s = l, t.l = c, t
		}
		getRGB(t, e = "srgb-linear") {
			return Se.fromWorkingColorSpace(Ce(this, we), e), t.r = we.r, t.g = we.g, t.b = we.b, t
		}
		getStyle(t = "srgb") {
			return Se.fromWorkingColorSpace(Ce(this, we), t), t !== T ? `color(${t} ${we.r} ${we.g} ${we.b})` : `rgb(${255*we.r|0},${255*we.g|0},${255*we.b|0})`
		}
		offsetHSL(t, e, n) {
			return this.getHSL(Te), Te.h += t, Te.s += e, Te.l += n, this.setHSL(Te.h, Te.s, Te.l), this
		}
		add(t) {
			return this.r += t.r, this.g += t.g, this.b += t.b, this
		}
		addColors(t, e) {
			return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
		}
		addScalar(t) {
			return this.r += t, this.g += t, this.b += t, this
		}
		sub(t) {
			return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
		}
		multiply(t) {
			return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
		}
		multiplyScalar(t) {
			return this.r *= t, this.g *= t, this.b *= t, this
		}
		lerp(t, e) {
			return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
		}
		lerpColors(t, e, n) {
			return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
		}
		lerpHSL(t, e) {
			this.getHSL(Te), t.getHSL(Ae);
			const n = U(Te.h, Ae.h, e),
				i = U(Te.s, Ae.s, e),
				r = U(Te.l, Ae.l, e);
			return this.setHSL(n, i, r), this
		}
		equals(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b
		}
		fromArray(t, e = 0) {
			return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
		}
		fromBufferAttribute(t, e) {
			return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
		}
		toJSON() {
			return this.getHex()
		}*[Symbol.iterator]() {
			yield this.r, yield this.g, yield this.b
		}
	}
	Le.NAMES = Ee;
	const Pe = new G,
		De = new G,
		Oe = new G,
		Ne = new G,
		Ie = new G,
		Ue = new G,
		Fe = new G;
	class ze {
		constructor(t = new G, e = new G(0, 0, -1)) {
			this.origin = t, this.direction = e
		}
		set(t, e) {
			return this.origin.copy(t), this.direction.copy(e), this
		}
		copy(t) {
			return this.origin.copy(t.origin), this.direction.copy(t.direction), this
		}
		at(t, e) {
			return e.copy(this.direction)
				.multiplyScalar(t)
				.add(this.origin)
		}
		lookAt(t) {
			return this.direction.copy(t)
				.sub(this.origin)
				.normalize(), this
		}
		recast(t) {
			return this.origin.copy(this.at(t, Pe)), this
		}
		closestPointToPoint(t, e) {
			e.subVectors(t, this.origin);
			const n = e.dot(this.direction);
			return n < 0 ? e.copy(this.origin) : e.copy(this.direction)
				.multiplyScalar(n)
				.add(this.origin)
		}
		distanceToPoint(t) {
			return Math.sqrt(this.distanceSqToPoint(t))
		}
		distanceSqToPoint(t) {
			const e = Pe.subVectors(t, this.origin)
				.dot(this.direction);
			return e < 0 ? this.origin.distanceToSquared(t) : (Pe.copy(this.direction)
				.multiplyScalar(e)
				.add(this.origin), Pe.distanceToSquared(t))
		}
		distanceSqToSegment(t, e, n, i) {
			De.copy(t)
				.add(e)
				.multiplyScalar(.5), Oe.copy(e)
				.sub(t)
				.normalize(), Ne.copy(this.origin)
				.sub(De);
			const r = .5 * t.distanceTo(e),
				a = -this.direction.dot(Oe),
				s = Ne.dot(this.direction),
				o = -Ne.dot(Oe),
				l = Ne.lengthSq(),
				c = Math.abs(1 - a * a);
			let h, u, d, p;
			if (c > 0)
				if (h = a * o - s, u = a * s - o, p = r * c, h >= 0)
					if (u >= -p)
						if (u <= p) {
							const t = 1 / c;
							h *= t, u *= t, d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l
						} else u = r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
			else u = -r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
			else u <= -p ? (h = Math.max(0, -(-a * r + s)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(a * r + s)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
			else u = a > 0 ? -r : r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
			return n && n.copy(this.direction)
				.multiplyScalar(h)
				.add(this.origin), i && i.copy(Oe)
				.multiplyScalar(u)
				.add(De), d
		}
		intersectSphere(t, e) {
			Pe.subVectors(t.center, this.origin);
			const n = Pe.dot(this.direction),
				i = Pe.dot(Pe) - n * n,
				r = t.radius * t.radius;
			if (i > r) return null;
			const a = Math.sqrt(r - i),
				s = n - a,
				o = n + a;
			return s < 0 && o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e)
		}
		intersectsSphere(t) {
			return this.distanceSqToPoint(t.center) <= t.radius * t.radius
		}
		distanceToPlane(t) {
			const e = t.normal.dot(this.direction);
			if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
			const n = -(this.origin.dot(t.normal) + t.constant) / e;
			return n >= 0 ? n : null
		}
		intersectPlane(t, e) {
			const n = this.distanceToPlane(t);
			return null === n ? null : this.at(n, e)
		}
		intersectsPlane(t) {
			const e = t.distanceToPoint(this.origin);
			return 0 === e || t.normal.dot(this.direction) * e < 0
		}
		intersectBox(t, e) {
			let n, i, r, a, s, o;
			const l = 1 / this.direction.x,
				c = 1 / this.direction.y,
				h = 1 / this.direction.z,
				u = this.origin;
			return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, a = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, a = (t.min.y - u.y) * c), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), h >= 0 ? (s = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (s = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || s > i ? null : ((s > n || n != n) && (n = s), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
		}
		intersectsBox(t) {
			return null !== this.intersectBox(t, Pe)
		}
		intersectTriangle(t, e, n, i, r) {
			Ie.subVectors(e, t), Ue.subVectors(n, t), Fe.crossVectors(Ie, Ue);
			let a, s = this.direction.dot(Fe);
			if (s > 0) {
				if (i) return null;
				a = 1
			} else {
				if (!(s < 0)) return null;
				a = -1, s = -s
			}
			Ne.subVectors(this.origin, t);
			const o = a * this.direction.dot(Ue.crossVectors(Ne, Ue));
			if (o < 0) return null;
			const l = a * this.direction.dot(Ie.cross(Ne));
			if (l < 0) return null;
			if (o + l > s) return null;
			const c = -a * Ne.dot(Fe);
			return c < 0 ? null : this.at(c / s, r)
		}
		applyMatrix4(t) {
			return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
		}
		equals(t) {
			return t.origin.equals(this.origin) && t.direction.equals(this.direction)
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
	}
	const Be = new G,
		He = new G,
		ke = new G,
		Ge = new G,
		Ve = new G,
		We = new G,
		Xe = new G,
		je = new G,
		qe = new G,
		Ye = new G;
	class Ze {
		constructor(t = new G, e = new G, n = new G) {
			this.a = t, this.b = e, this.c = n
		}
		static getNormal(t, e, n, i) {
			i.subVectors(n, e), Be.subVectors(t, e), i.cross(Be);
			const r = i.lengthSq();
			return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
		}
		static getBarycoord(t, e, n, i, r) {
			Be.subVectors(i, e), He.subVectors(n, e), ke.subVectors(t, e);
			const a = Be.dot(Be),
				s = Be.dot(He),
				o = Be.dot(ke),
				l = He.dot(He),
				c = He.dot(ke),
				h = a * l - s * s;
			if (0 === h) return r.set(-2, -1, -1);
			const u = 1 / h,
				d = (l * o - s * c) * u,
				p = (a * c - s * o) * u;
			return r.set(1 - d - p, p, d)
		}
		static containsPoint(t, e, n, i) {
			return this.getBarycoord(t, e, n, i, Ge), Ge.x >= 0 && Ge.y >= 0 && Ge.x + Ge.y <= 1
		}
		static getUV(t, e, n, i, r, a, s, o) {
			return this.getBarycoord(t, e, n, i, Ge), o.set(0, 0), o.addScaledVector(r, Ge.x), o.addScaledVector(a, Ge.y), o.addScaledVector(s, Ge.z), o
		}
		static isFrontFacing(t, e, n, i) {
			return Be.subVectors(n, e), He.subVectors(t, e), Be.cross(He)
				.dot(i) < 0
		}
		set(t, e, n) {
			return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
		}
		setFromPointsAndIndices(t, e, n, i) {
			return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
		}
		setFromAttributeAndIndices(t, e, n, i) {
			return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
		}
		getArea() {
			return Be.subVectors(this.c, this.b), He.subVectors(this.a, this.b), .5 * Be.cross(He)
				.length()
		}
		getMidpoint(t) {
			return t.addVectors(this.a, this.b)
				.add(this.c)
				.multiplyScalar(1 / 3)
		}
		getNormal(t) {
			return Ze.getNormal(this.a, this.b, this.c, t)
		}
		getPlane(t) {
			return t.setFromCoplanarPoints(this.a, this.b, this.c)
		}
		getBarycoord(t, e) {
			return Ze.getBarycoord(t, this.a, this.b, this.c, e)
		}
		getUV(t, e, n, i, r) {
			return Ze.getUV(t, this.a, this.b, this.c, e, n, i, r)
		}
		containsPoint(t) {
			return Ze.containsPoint(t, this.a, this.b, this.c)
		}
		isFrontFacing(t) {
			return Ze.isFrontFacing(this.a, this.b, this.c, t)
		}
		intersectsBox(t) {
			return t.intersectsTriangle(this)
		}
		closestPointToPoint(t, e) {
			const n = this.a,
				i = this.b,
				r = this.c;
			let a, s;
			Ve.subVectors(i, n), We.subVectors(r, n), je.subVectors(t, n);
			const o = Ve.dot(je),
				l = We.dot(je);
			if (o <= 0 && l <= 0) return e.copy(n);
			qe.subVectors(t, i);
			const c = Ve.dot(qe),
				h = We.dot(qe);
			if (c >= 0 && h <= c) return e.copy(i);
			const u = o * h - c * l;
			if (u <= 0 && o >= 0 && c <= 0) return a = o / (o - c), e.copy(n)
				.addScaledVector(Ve, a);
			Ye.subVectors(t, r);
			const d = Ve.dot(Ye),
				p = We.dot(Ye);
			if (p >= 0 && d <= p) return e.copy(r);
			const f = d * l - o * p;
			if (f <= 0 && l >= 0 && p <= 0) return s = l / (l - p), e.copy(n)
				.addScaledVector(We, s);
			const m = c * p - d * h;
			if (m <= 0 && h - c >= 0 && d - p >= 0) return Xe.subVectors(r, i), s = (h - c) / (h - c + (d - p)), e.copy(i)
				.addScaledVector(Xe, s);
			const g = 1 / (m + f + u);
			return a = f * g, s = u * g, e.copy(n)
				.addScaledVector(Ve, a)
				.addScaledVector(We, s)
		}
		equals(t) {
			return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
		}
	}
	class Je extends me {
		constructor(t) {
			super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Le(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
		}
		copy(t) {
			return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
		}
	}
	const Ke = new xt,
		Qe = new ze,
		$e = new ht,
		tn = new G,
		en = new G,
		nn = new G,
		rn = new G,
		an = new G,
		sn = new G,
		on = new G,
		ln = new G,
		cn = new G,
		hn = new At,
		un = new At,
		dn = new At,
		pn = new G,
		fn = new G;
	class mn extends ee {
		// debugger
		constructor(t = new ue, e = new Je) {
			super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
		}
		copy(t, e) {
			return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
		}
		updateMorphTargets() {
			const t = this.geometry.morphAttributes,
				e = Object.keys(t);
			if (e.length > 0) {
				const n = t[e[0]];
				if (void 0 !== n) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let t = 0, e = n.length; t < e; t++) {
						const e = n[t].name || String(t);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
					}
				}
			}
		}
		raycast(t, e) {
			const n = this.geometry,
				i = this.material,
				r = this.matrixWorld;
			if (void 0 === i) return;
			if (null === n.boundingSphere && n.computeBoundingSphere(), $e.copy(n.boundingSphere), $e.applyMatrix4(r), !1 === t.ray.intersectsSphere($e)) return;
			if (Ke.copy(r)
				.invert(), Qe.copy(t.ray)
				.applyMatrix4(Ke), null !== n.boundingBox && !1 === Qe.intersectsBox(n.boundingBox)) return;
			let a;
			const s = n.index,
				o = n.attributes.position,
				l = n.morphAttributes.position,
				c = n.morphTargetsRelative,
				h = n.attributes.uv,
				u = n.attributes.uv2,
				d = n.groups,
				p = n.drawRange;
			if (null !== s)
				if (Array.isArray(i))
					for (let n = 0, r = d.length; n < r; n++) {
						const r = d[n],
							f = i[r.materialIndex];
						for (let n = Math.max(r.start, p.start), i = Math.min(s.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) {
							const i = s.getX(n),
								d = s.getX(n + 1),
								p = s.getX(n + 2);
							a = gn(this, f, t, Qe, o, l, c, h, u, i, d, p), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = r.materialIndex, e.push(a))
						}
					} else
						for (let n = Math.max(0, p.start), r = Math.min(s.count, p.start + p.count); n < r; n += 3) {
							const r = s.getX(n),
								d = s.getX(n + 1),
								p = s.getX(n + 2);
							a = gn(this, i, t, Qe, o, l, c, h, u, r, d, p), a && (a.faceIndex = Math.floor(n / 3), e.push(a))
						} else if (void 0 !== o)
							if (Array.isArray(i))
								for (let n = 0, r = d.length; n < r; n++) {
									const r = d[n],
										s = i[r.materialIndex];
									for (let n = Math.max(r.start, p.start), i = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) a = gn(this, s, t, Qe, o, l, c, h, u, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = r.materialIndex, e.push(a))
								} else
									for (let n = Math.max(0, p.start), r = Math.min(o.count, p.start + p.count); n < r; n += 3) a = gn(this, i, t, Qe, o, l, c, h, u, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), e.push(a))
		}
	}

	function gn(t, e, n, i, r, a, s, o, l, c, h, u) {
		tn.fromBufferAttribute(r, c), en.fromBufferAttribute(r, h), nn.fromBufferAttribute(r, u);
		const d = t.morphTargetInfluences;
		if (a && d) {
			on.set(0, 0, 0), ln.set(0, 0, 0), cn.set(0, 0, 0);
			for (let t = 0, e = a.length; t < e; t++) {
				const e = d[t],
					n = a[t];
				0 !== e && (rn.fromBufferAttribute(n, c), an.fromBufferAttribute(n, h), sn.fromBufferAttribute(n, u), s ? (on.addScaledVector(rn, e), ln.addScaledVector(an, e), cn.addScaledVector(sn, e)) : (on.addScaledVector(rn.sub(tn), e), ln.addScaledVector(an.sub(en), e), cn.addScaledVector(sn.sub(nn), e)))
			}
			tn.add(on), en.add(ln), nn.add(cn)
		}
		t.isSkinnedMesh && (t.boneTransform(c, tn), t.boneTransform(h, en), t.boneTransform(u, nn));
		const p = function(t, e, n, i, r, a, s, o) {
			let l;
			if (l = 1 === e.side ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, 2 !== e.side, o), null === l) return null;
			fn.copy(o), fn.applyMatrix4(t.matrixWorld);
			const c = n.ray.origin.distanceTo(fn);
			return c < n.near || c > n.far ? null : {
				distance: c,
				point: fn.clone(),
				object: t
			}
		}(t, e, n, i, tn, en, nn, pn);
		if (p) {
			o && (hn.fromBufferAttribute(o, c), un.fromBufferAttribute(o, h), dn.fromBufferAttribute(o, u), p.uv = Ze.getUV(pn, tn, en, nn, hn, un, dn, new At)), l && (hn.fromBufferAttribute(l, c), un.fromBufferAttribute(l, h), dn.fromBufferAttribute(l, u), p.uv2 = Ze.getUV(pn, tn, en, nn, hn, un, dn, new At));
			const t = {
				a: c,
				b: h,
				c: u,
				normal: new G,
				materialIndex: 0
			};
			Ze.getNormal(tn, en, nn, t.normal), p.face = t
		}
		return p
	}
	const _n = {
			alphamap_fragment: "\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
			alphamap_pars_fragment: "\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
			alphatest_fragment: "\n#ifdef USE_ALPHATEST\n\n\tif ( diffuseColor.a < alphaTest ) discard;\n\n#endif\n",
			alphatest_pars_fragment: "\n#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif\n",
			aomap_fragment: "\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\n\t#endif\n\n#endif\n",
			aomap_pars_fragment: "\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n",
			begin_vertex: "\nvec3 transformed = vec3( position );\n",
			beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n",
			bsdfs: "\n\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is \"roughness squared\" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( V * D );\n\n}\n\n#ifdef USE_IRIDESCENCE\n\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\n\t\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\t\tfloat D = D_GGX( alpha, dotNH );\n\n\t\treturn F * ( V * D );\n\n\t}\n\n#endif\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat D_Charlie( float roughness, float dotNH ) {\n\n\tfloat alpha = pow2( roughness );\n\n\t// Estevez and Kulla 2017, \"Production Friendly Microfacet Sheen BRDF\"\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\n\t// Neubelt and Pettineo 2013, \"Crafting a Next-gen Material Pipeline for The Order: 1886\"\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n\n}\n\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\n\treturn sheenColor * ( D * V );\n\n}\n\n#endif\n",
			iridescence_fragment: "\n\n#ifdef USE_IRIDESCENCE\n\n\t// XYZ to linear-sRGB color space\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\n\t// Assume air interface for top\n\t// Note: We don't handle the case fresnel0 == 1\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\n\t}\n\n\t// Conversion FO/IOR\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\n\t}\n\n\t// ior is a value between 1.0 and 3.0. 1.0 is air interface\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\n\t}\n\n\t// Fresnel equations for dielectric/dielectric interfaces.\n\t// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html\n\t// Evaluation XYZ sensitivity curves in Fourier space\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\n\t}\n\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\n\t\tvec3 I;\n\n\t\t// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\t// Evaluate the cosTheta on the base layer (Snell law)\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\n\t\t// Handle TIR:\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\n\t\t\t return vec3( 1.0 );\n\n\t\t}\n\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\n\t\t// First interface\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\n\t\t// Second interface\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0\n\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\n\t\t// Phase shift\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\n\t\t// Compound terms\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\n\t\t// Reflectance term for m = 0 (DC term amplitude)\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\n\t\t// Reflectance term for m > 0 (pairs of diracs)\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\n\t\t}\n\n\t\t// Since out of gamut colors might be produced, negative color values are clamped to 0.\n\t\treturn max( I, vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n",
			bumpmap_pars_fragment: "\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm; // normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n",
			clipping_planes_fragment: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n",
			clipping_planes_pars_fragment: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n",
			clipping_planes_pars_vertex: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n#endif\n",
			clipping_planes_vertex: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvClipPosition = - mvPosition.xyz;\n\n#endif\n",
			color_fragment: "\n#if defined( USE_COLOR_ALPHA )\n\n\tdiffuseColor *= vColor;\n\n#elif defined( USE_COLOR )\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n",
			color_pars_fragment: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
			color_pars_vertex: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
			color_vertex: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvColor = vec4( 1.0 );\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n\tvColor *= color;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n\tvColor.xyz *= instanceColor.xyz;\n\n#endif\n",
			common: "\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\n\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n\treturn fract( sin( sn ) * c );\n\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t// dir can be either a direction vector or a normal vector\n\t// upper-left 3x3 of matrix is assumed to be orthogonal\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\nfloat luminance( const in vec3 rgb ) {\n\n\t// assumes rgb is in linear color space with sRGB primaries and D65 white point\n\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\n\treturn dot( weights, rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n\treturn m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n\t// dir is assumed to be unit length\n\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\treturn vec2( u, v );\n\n}\n",
			cube_uv_reflection_fragment: "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\n\t// These shader functions convert between the UV coordinates of a single face of\n\t// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n\t// sampling a textureCube (not generally normalized ).\n\n\tfloat getFace( vec3 direction ) {\n\n\t\tvec3 absDirection = abs( direction );\n\n\t\tfloat face = - 1.0;\n\n\t\tif ( absDirection.x > absDirection.z ) {\n\n\t\t\tif ( absDirection.x > absDirection.y )\n\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t} else {\n\n\t\t\tif ( absDirection.z > absDirection.y )\n\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t}\n\n\t\treturn face;\n\n\t}\n\n\t// RH coordinate system; PMREM face-indexing convention\n\tvec2 getUV( vec3 direction, float face ) {\n\n\t\tvec2 uv;\n\n\t\tif ( face == 0.0 ) {\n\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n\t\t} else if ( face == 1.0 ) {\n\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n\t\t} else if ( face == 2.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n\t\t} else if ( face == 3.0 ) {\n\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n\t\t} else if ( face == 4.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n\t\t} else {\n\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n\t\t}\n\n\t\treturn 0.5 * ( uv + 1.0 );\n\n\t}\n\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n\t\tfloat face = getFace( direction );\n\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\n\t\tfloat faceSize = exp2( mipInt );\n\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\n\t\tif ( face > 2.0 ) {\n\n\t\t\tuv.y += faceSize;\n\n\t\t\tface -= 3.0;\n\n\t\t}\n\n\t\tuv.x += face * faceSize;\n\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\n\t\t#ifdef texture2DGradEXT\n\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering\n\n\t\t#else\n\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\n\t\t#endif\n\n\t}\n\n\t// These defines must match with PMREMGenerator\n\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\n\tfloat roughnessToMip( float roughness ) {\n\n\t\tfloat mip = 0.0;\n\n\t\tif ( roughness >= cubeUV_r1 ) {\n\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\n\t\t} else {\n\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n\t\t}\n\n\t\treturn mip;\n\n\t}\n\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\n\t\tfloat mipF = fract( mip );\n\n\t\tfloat mipInt = floor( mip );\n\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n\t\tif ( mipF == 0.0 ) {\n\n\t\t\treturn vec4( color0, 1.0 );\n\n\t\t} else {\n\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\n\t\t}\n\n\t}\n\n#endif\n",
			defaultnormal_vertex: "\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\t// this is in lieu of a per-instance normal-matrix\n\t// shear transforms in the instance matrix are not supported\n\n\tmat3 m = mat3( instanceMatrix );\n\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\n\ttransformedNormal = m * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n",
			displacementmap_pars_vertex: "\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n",
			displacementmap_vertex: "\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n\n#endif\n",
			emissivemap_fragment: "\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n",
			emissivemap_pars_fragment: "\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n",
			encodings_fragment: "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n",
			encodings_pars_fragment: "\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n",
			envmap_fragment: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n",
			envmap_common_pars_fragment: "\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n",
			envmap_pars_fragment: "\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n",
			envmap_pars_vertex: "\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n",
			envmap_physical_pars_fragment: "\n#if defined( USE_ENVMAP )\n\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\n\t\t\t// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
			envmap_vertex: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
			fog_vertex: "\n#ifdef USE_FOG\n\n\tvFogDepth = - mvPosition.z;\n\n#endif\n",
			fog_pars_vertex: "\n#ifdef USE_FOG\n\n\tvarying float vFogDepth;\n\n#endif\n",
			fog_fragment: "\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n",
			fog_pars_fragment: "\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n",
			gradientmap_pars_fragment: "\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\n\t#else\n\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\n\t#endif\n\n}\n",
			lightmap_fragment: "\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n\n#endif\n",
			lightmap_pars_fragment: "\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n",
			lights_lambert_fragment: "\nLambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;\n",
			lights_lambert_pars_fragment: "\nvarying vec3 vViewPosition;\n\nstruct LambertMaterial {\n\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n\n#define Material_LightProbeLOD( material )\t(0)\n",
			lights_pars_begin: "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\treturn irradiance;\n\n}\n\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t// page 32, equation 26: E[window1]\n\t\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\t\tif ( cutoffDistance > 0.0 ) {\n\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t\t}\n\n\t\treturn distanceFalloff;\n\n\t#else\n\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t\t}\n\n\t\treturn 1.0;\n\n\t#endif\n\n}\n\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\tif ( spotAttenuation > 0.0 ) {\n\n\t\t\tfloat lightDistance = length( lVector );\n\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t\t} else {\n\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n",
			lights_toon_fragment: "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n",
			lights_toon_pars_fragment: "\nvarying vec3 vViewPosition;\n\nstruct ToonMaterial {\n\n\tvec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n\n#define Material_LightProbeLOD( material )\t(0)\n",
			lights_phong_fragment: "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
			lights_phong_pars_fragment: "\nvarying vec3 vViewPosition;\n\nstruct BlinnPhongMaterial {\n\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n",
			lights_physical_fragment: "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n\n#ifdef IOR\n\n\tmaterial.ior = ior;\n\n\t#ifdef SPECULAR\n\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\n\t\t#endif\n\n\t\t#ifdef USE_SPECULARCOLORMAP\n\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\n\t\t#endif\n\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\n\t#else\n\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\n\t#endif\n\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\n\t#ifdef USE_CLEARCOATMAP\n\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\n\t#endif\n\n\tmaterial.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\n\t#ifdef USE_IRIDESCENCEMAP\n\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\n\t#else\n\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\n\t#endif\n\n#endif\n\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheenColor;\n\n\t#ifdef USE_SHEENCOLORMAP\n\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\n\t#endif\n\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\n\t#endif\n\n#endif\n",
			lights_physical_pars_fragment: '\nstruct PhysicalMaterial {\n\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\n};\n\n// temporary\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\n\n// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from \n// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found\n// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tfloat r2 = roughness * roughness;\n\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\n\treturn saturate( DG * RECIPROCAL_PI );\n\n}\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via \'environmentBRDF\' from "Physically Based Shading on Mobile"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\n\treturn fab;\n\n}\n\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\treturn specularColor * fab.x + specularF90 * fab.y;\n\n}\n\n// Fdez-Agüera\'s "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\n\t#else\n\n\t\tvec3 Fr = specularColor;\n\n\t#endif\n\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\n\t#else\n\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\n\t#endif\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\n\t#else\n\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\n\t#endif\n\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n',
			lights_fragment_begin: "\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\n\tif ( material.iridescenceThickness == 0.0 ) {\n\n\t\tmaterial.iridescence = 0.0;\n\n\t} else {\n\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\n\t}\n\n\tif ( material.iridescence > 0.0 ) {\n\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\n\t\t// Iridescence F0 approximation\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\n\t}\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
			lights_fragment_maps: "\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\n\t#endif\n\n#endif\n",
			lights_fragment_end: "\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n",
			logdepthbuf_fragment: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n",
			logdepthbuf_pars_fragment: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n",
			logdepthbuf_pars_vertex: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n",
			logdepthbuf_vertex: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
			map_fragment: "\n#ifdef USE_MAP\n\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\n\t#ifdef DECODE_VIDEO_TEXTURE\n\n\t\t// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)\n\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\n\t#endif\n\n\tdiffuseColor *= sampledDiffuseColor;\n\n#endif\n",
			map_pars_fragment: "\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n",
			map_particle_fragment: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n#endif\n\n#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, uv );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n",
			map_particle_pars_fragment: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tuniform mat3 uvTransform;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
			metalnessmap_fragment: "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n",
			metalnessmap_pars_fragment: "\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n",
			morphcolor_vertex: "\n#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tvColor *= morphTargetBaseInfluence;\n\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t#if defined( USE_COLOR_ALPHA )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\n\t\t#elif defined( USE_COLOR )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\n\t\t#endif\n\n\t}\n\n#endif\n",
			morphnormal_vertex: "\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n\t#endif\n\n#endif\n",
			morphtarget_pars_vertex: "\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\n\t\t}\n\n\t#else\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\n\t\t#else\n\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
			morphtarget_vertex: "\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
			normal_fragment_begin: "\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\t#ifdef USE_TANGENT\n\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\n\t\t#endif\n\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n",
			normal_fragment_maps: "\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( TANGENTSPACE_NORMALMAP )\n\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tnormal = normalize( vTBN * mapN );\n\n\t#else\n\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\n\t#endif\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n",
			normal_pars_fragment: "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n",
			normal_pars_vertex: "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n",
			normal_vertex: "\n#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n",
			normalmap_pars_fragment: "\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\n\t// Normal Mapping Without Precomputed Tangents\n\t// http://www.thetenthplanet.de/archives/1180\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 N = surf_norm; // normalized\n\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\n\t}\n\n#endif\n",
			clearcoat_normal_fragment_begin: "\n#ifdef USE_CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n",
			clearcoat_normal_fragment_maps: "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\n\t#else\n\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\n\t#endif\n\n#endif\n",
			clearcoat_pars_fragment: "\n\n#ifdef USE_CLEARCOATMAP\n\n\tuniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform sampler2D clearcoatRoughnessMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n",
			iridescence_pars_fragment: "\n\n#ifdef USE_IRIDESCENCEMAP\n\n\tuniform sampler2D iridescenceMap;\n\n#endif\n\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\tuniform sampler2D iridescenceThicknessMap;\n\n#endif\n",
			output_fragment: "\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n\n// https://github.com/mrdoob/three.js/pull/22425\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\n",
			packing: "\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\n\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\n// NOTE: https://twitter.com/gonnavis/status/1377183786949959682\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
			premultiplied_alpha_fragment: "\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n",
			project_vertex: "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n",
			dithering_fragment: "\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n",
			dithering_pars_fragment: "\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift according to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n",
			roughnessmap_fragment: "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n",
			roughnessmap_pars_fragment: "\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n",
			shadowmap_pars_fragment: "\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n\n#endif\n\n#if NUM_SPOT_LIGHT_MAPS > 0\n\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n\n#endif\n\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
			shadowmap_pars_vertex: "\n\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n\n#endif\n\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n",
			shadowmap_vertex: "\n#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\t// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\n\t#endif\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n",
			shadowmask_pars_fragment: "\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLightShadow directionalLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLightShadow spotLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLightShadow pointLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n",
			skinbase_vertex: "\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n",
			skinning_pars_vertex: "\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\n\tmat4 getBoneMatrix( const in float i ) {\n\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\ty = dy * ( y + 0.5 );\n\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\treturn bone;\n\n\t}\n\n#endif\n",
			skinning_vertex: "\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n",
			skinnormal_vertex: "\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n",
			specularmap_fragment: "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n",
			specularmap_pars_fragment: "\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n",
			tonemapping_fragment: "\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n",
			tonemapping_pars_fragment: "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\t// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\n\t// ODT_SAT => XYZ => D60_2_D65 => sRGB\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\n\tcolor *= toneMappingExposure / 0.6;\n\n\tcolor = ACESInputMat * color;\n\n\t// Apply RRT and ODT\n\tcolor = RRTAndODTFit( color );\n\n\tcolor = ACESOutputMat * color;\n\n\t// Clamp to [0, 1]\n\treturn saturate( color );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n",
			transmission_fragment: "\n#ifdef USE_TRANSMISSION\n\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\n\t#endif\n\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n\n#endif\n",
			transmission_pars_fragment: "\n#ifdef USE_TRANSMISSION\n\n\t// Transmission code is based on glTF-Sampler-Viewer\n\t// https://github.com/KhronosGroup/glTF-Sample-Viewer\n\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tuniform sampler2D transmissionMap;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tuniform sampler2D thicknessMap;\n\n\t#endif\n\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\n\tvarying vec3 vWorldPosition;\n\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\n\t\t// Direction of refracted light.\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\n\t\t// Compute rotation-independant scaling of the model matrix.\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n\t\t// The thickness is specified in local space.\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\n\t}\n\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\n\t\t// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n\t\t// an IOR of 1.5 results in the default amount of microfacet refraction.\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\n\t}\n\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\n\t\t#ifdef texture2DLodEXT\n\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#else\n\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#endif\n\n\t}\n\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tif ( isinf( attenuationDistance ) ) {\n\n\t\t\t// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.\n\t\t\treturn radiance;\n\n\t\t} else {\n\n\t\t\t// Compute light attenuation using Beer's law.\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law\n\t\t\treturn transmittance * radiance;\n\n\t\t}\n\n\t}\n\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\n\t\t// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\n\t\t// Sample framebuffer to get pixel the refracted ray hits.\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\n\t\t// Get the specular component.\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\n\t}\n#endif\n",
			uv_pars_fragment: "\n#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\n\tvarying vec2 vUv;\n\n#endif\n",
			uv_pars_vertex: "\n#ifdef USE_UV\n\n\t#ifdef UVS_VERTEX_ONLY\n\n\t\tvec2 vUv;\n\n\t#else\n\n\t\tvarying vec2 vUv;\n\n\t#endif\n\n\tuniform mat3 uvTransform;\n\n#endif\n",
			uv_vertex: "\n#ifdef USE_UV\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n#endif\n",
			uv2_pars_fragment: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif\n",
			uv2_pars_vertex: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n\tuniform mat3 uv2Transform;\n\n#endif\n",
			uv2_vertex: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n\n#endif\n",
			worldpos_vertex: "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n",
			background_vert: "\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n",
			background_frag: "\nuniform sampler2D t2D;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tgl_FragColor = texture2D( t2D, vUv );\n\n\t#ifdef DECODE_VIDEO_TEXTURE\n\n\t\t// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)\n\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\n\t#endif\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
			cube_vert: "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n",
			cube_frag: "\n#include <envmap_common_pars_fragment>\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
			depth_vert: "\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.\n// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for\n// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvHighPrecisionZW = gl_Position.zw;\n\n}\n",
			depth_frag: "\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n",
			distanceRGBA_vert: "\n#define DISTANCE\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n\n}\n",
			distanceRGBA_frag: "\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n",
			equirect_vert: "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n",
			equirect_frag: "\nuniform sampler2D tEquirect;\n\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvec3 direction = normalize( vWorldDirection );\n\n\tvec2 sampleUV = equirectUv( direction );\n\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
			linedashed_vert: "\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\tvLineDistance = scale * lineDistance;\n\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
			linedashed_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
			meshbasic_vert: "\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
			meshbasic_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
			meshlambert_vert: "\n#define LAMBERT\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
			meshlambert_frag: "\n#define LAMBERT\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
			meshmatcap_vert: "\n#define MATCAP\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n}\n",
			meshmatcap_frag: "\n#define MATCAP\n\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\n\t#ifdef USE_MATCAP\n\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\n\t#else\n\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing\n\n\t#endif\n\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
			meshnormal_vert: "\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n",
			meshnormal_frag: "\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n\t#ifdef OPAQUE\n\n\t\tgl_FragColor.a = 1.0;\n\n\t#endif\n\n}\n",
			meshphong_vert: "\n#define PHONG\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
			meshphong_frag: "\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
			meshphysical_vert: "\n#define STANDARD\n\nvarying vec3 vViewPosition;\n\n#ifdef USE_TRANSMISSION\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n#ifdef USE_TRANSMISSION\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n}\n",
			meshphysical_frag: "\n#define STANDARD\n\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef IOR\n\tuniform float ior;\n#endif\n\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\n\t#include <transmission_fragment>\n\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\n\t#ifdef USE_SHEEN\n\n\t\t// Sheen energy compensation approximation calculation can be found at the end of\n\t\t// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\n\t#endif\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
			meshtoon_vert: "\n#define TOON\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
			meshtoon_frag: "\n#define TOON\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
			points_vert: "\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\n\tgl_PointSize = size;\n\n\t#ifdef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n\n}\n",
			points_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
			shadow_vert: "\n#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
			shadow_frag: "\nuniform vec3 color;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
			sprite_vert: "\nuniform float rotation;\nuniform vec2 center;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n\t#ifndef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\n\t#endif\n\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n\tmvPosition.xy += rotatedPosition;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
			sprite_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
		},
		vn = {
			common: {
				diffuse: {
					value: new Le(16777215)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new ut
				},
				uv2Transform: {
					value: new ut
				},
				alphaMap: {
					value: null
				},
				alphaTest: {
					value: 0
				}
			},
			specularmap: {
				specularMap: {
					value: null
				}
			},
			envmap: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				ior: {
					value: 1.5
				},
				refractionRatio: {
					value: .98
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new At(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 25e-5
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2e3
				},
				fogColor: {
					value: new Le(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				lightProbe: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {}
					}
				},
				directionalLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {}
					}
				},
				spotLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotLightMap: {
					value: []
				},
				spotShadowMap: {
					value: []
				},
				spotLightMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {}
					}
				},
				pointLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				},
				ltc_1: {
					value: null
				},
				ltc_2: {
					value: null
				}
			},
			points: {
				diffuse: {
					value: new Le(16777215)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				alphaMap: {
					value: null
				},
				alphaTest: {
					value: 0
				},
				uvTransform: {
					value: new ut
				}
			},
			sprite: {
				diffuse: {
					value: new Le(16777215)
				},
				opacity: {
					value: 1
				},
				center: {
					value: new At(.5, .5)
				},
				rotation: {
					value: 0
				},
				map: {
					value: null
				},
				alphaMap: {
					value: null
				},
				alphaTest: {
					value: 0
				},
				uvTransform: {
					value: new ut
				}
			}
		},
		xn = {
			basic: {
				uniforms: _e([vn.common, vn.specularmap, vn.envmap, vn.aomap, vn.lightmap, vn.fog]),
				vertexShader: _n.meshbasic_vert,
				fragmentShader: _n.meshbasic_frag
			},
			lambert: {
				uniforms: _e([vn.common, vn.specularmap, vn.envmap, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.fog, vn.lights, {
					emissive: {
						value: new Le(0)
					}
				}]),
				vertexShader: _n.meshlambert_vert,
				fragmentShader: _n.meshlambert_frag
			},
			phong: {
				uniforms: _e([vn.common, vn.specularmap, vn.envmap, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.fog, vn.lights, {
					emissive: {
						value: new Le(0)
					},
					specular: {
						value: new Le(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: _n.meshphong_vert,
				fragmentShader: _n.meshphong_frag
			},
			standard: {
				uniforms: _e([vn.common, vn.envmap, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.roughnessmap, vn.metalnessmap, vn.fog, vn.lights, {
					emissive: {
						value: new Le(0)
					},
					roughness: {
						value: 1
					},
					metalness: {
						value: 0
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: _n.meshphysical_vert,
				fragmentShader: _n.meshphysical_frag
			},
			toon: {
				uniforms: _e([vn.common, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.gradientmap, vn.fog, vn.lights, {
					emissive: {
						value: new Le(0)
					}
				}]),
				vertexShader: _n.meshtoon_vert,
				fragmentShader: _n.meshtoon_frag
			},
			matcap: {
				uniforms: _e([vn.common, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.fog, {
					matcap: {
						value: null
					}
				}]),
				vertexShader: _n.meshmatcap_vert,
				fragmentShader: _n.meshmatcap_frag
			},
			points: {
				uniforms: _e([vn.points, vn.fog]),
				vertexShader: _n.points_vert,
				fragmentShader: _n.points_frag
			},
			dashed: {
				uniforms: _e([vn.common, vn.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: _n.linedashed_vert,
				fragmentShader: _n.linedashed_frag
			},
			depth: {
				uniforms: _e([vn.common, vn.displacementmap]),
				vertexShader: _n.depth_vert,
				fragmentShader: _n.depth_frag
			},
			normal: {
				uniforms: _e([vn.common, vn.bumpmap, vn.normalmap, vn.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: _n.meshnormal_vert,
				fragmentShader: _n.meshnormal_frag
			},
			sprite: {
				uniforms: _e([vn.sprite, vn.fog]),
				vertexShader: _n.sprite_vert,
				fragmentShader: _n.sprite_frag
			},
			background: {
				uniforms: {
					uvTransform: {
						value: new ut
					},
					t2D: {
						value: null
					}
				},
				vertexShader: _n.background_vert,
				fragmentShader: _n.background_frag
			},
			cube: {
				uniforms: _e([vn.envmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: _n.cube_vert,
				fragmentShader: _n.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: _n.equirect_vert,
				fragmentShader: _n.equirect_frag
			},
			distanceRGBA: {
				uniforms: _e([vn.common, vn.displacementmap, {
					referencePosition: {
						value: new G
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1e3
					}
				}]),
				vertexShader: _n.distanceRGBA_vert,
				fragmentShader: _n.distanceRGBA_frag
			},
			shadow: {
				uniforms: _e([vn.lights, vn.fog, {
					color: {
						value: new Le(0)
					},
					opacity: {
						value: 1
					}
				}]),
				vertexShader: _n.shadow_vert,
				fragmentShader: _n.shadow_frag
			}
		};

	function yn(t, e, n, i, r, s) {
		const o = new Le(0);
		let l, c, h = !0 === r ? 0 : 1,
			u = null,
			d = 0,
			p = null;

		function f(t, e) {
			n.buffers.color.setClear(t.r, t.g, t.b, e, s)
		}
		return {
			getClearColor: function() {
				return o
			},
			setClearColor: function(t, e = 1) {
				o.set(t), h = e, f(o, h)
			},
			getClearAlpha: function() {
				return h
			},
			setClearAlpha: function(t) {
				h = t, f(o, h)
			},
			render: function(n, r) {
				let s = !1,
					m = !0 === r.isScene ? r.background : null;
				m && m.isTexture && (m = e.get(m));
				const g = t.xr,
					_ = g.getSession && g.getSession();
				_ && "additive" === _.environmentBlendMode && (m = null), null === m ? f(o, h) : m && m.isColor && (f(m, 1), s = !0), (t.autoClear || s) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.mapping === a) ? (void 0 === c && (c = new mn(new de(1, 1, 1), new xe({
					name: "BackgroundCubeMaterial",
					uniforms: ge(xn.cube.uniforms),
					vertexShader: xn.cube.vertexShader,
					fragmentShader: xn.cube.fragmentShader,
					side: 1,
					depthTest: !1,
					depthWrite: !1,
					fog: !1
				})), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t, e, n) {
					this.matrixWorld.copyPosition(n.matrixWorld)
				}, Object.defineProperty(c.material, "envMap", {
					get: function() {
						return this.uniforms.envMap.value
					}
				}), i.update(c)), c.material.uniforms.envMap.value = m, c.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, u === m && d === m.version && p === t.toneMapping || (c.material.needsUpdate = !0, u = m, d = m.version, p = t.toneMapping), c.layers.enableAll(), n.unshift(c, c.geometry, c.material, 0, 0, null)) : m && m.isTexture && (void 0 === l && (l = new mn(new pe(2, 2), new xe({
					name: "BackgroundMaterial",
					uniforms: ge(xn.background.uniforms),
					vertexShader: xn.background.vertexShader,
					fragmentShader: xn.background.fragmentShader,
					side: 0,
					depthTest: !1,
					depthWrite: !1,
					fog: !1
				})), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
					get: function() {
						return this.uniforms.t2D.value
					}
				}), i.update(l)), l.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), l.material.uniforms.uvTransform.value.copy(m.matrix), u === m && d === m.version && p === t.toneMapping || (l.material.needsUpdate = !0, u = m, d = m.version, p = t.toneMapping), l.layers.enableAll(), n.unshift(l, l.geometry, l.material, 0, 0, null))
			}
		}
	}

	function bn(t, e, n, i) {
		const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
			s = i.isWebGL2 || null !== a,
			o = {},
			l = p(null);
		let c = l,
			h = !1;

		function u(e) {
			return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e)
		}

		function d(e) {
			return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e)
		}

		function p(t) {
			const e = [],
				n = [],
				i = [];
			for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
			return {
				geometry: null,
				program: null,
				wireframe: !1,
				newAttributes: e,
				enabledAttributes: n,
				attributeDivisors: i,
				object: t,
				attributes: {},
				index: null
			}
		}

		function f() {
			const t = c.newAttributes;
			for (let e = 0, n = t.length; e < n; e++) t[e] = 0
		}

		function m(t) {
			g(t, 0)
		}

		function g(n, r) {
			const a = c.newAttributes,
				s = c.enabledAttributes,
				o = c.attributeDivisors;
			a[n] = 1, 0 === s[n] && (t.enableVertexAttribArray(n), s[n] = 1), o[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r)
		}

		function _() {
			const e = c.newAttributes,
				n = c.enabledAttributes;
			for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
		}

		function v(e, n, r, a, s, o) {
			!0 !== i.isWebGL2 || r !== t.INT && r !== t.UNSIGNED_INT ? t.vertexAttribPointer(e, n, r, a, s, o) : t.vertexAttribIPointer(e, n, r, s, o)
		}

		function x() {
			y(), h = !0, c !== l && (c = l, u(c.object))
		}

		function y() {
			l.geometry = null, l.program = null, l.wireframe = !1
		}
		return {
			setup: function(r, l, d, x, y) {
				let b = !1;
				if (s) {
					const e = function(e, n, r) {
						const s = !0 === r.wireframe;
						let l = o[e.id];
						void 0 === l && (l = {}, o[e.id] = l);
						let c = l[n.id];
						void 0 === c && (c = {}, l[n.id] = c);
						let h = c[s];
						return void 0 === h && (h = p(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()), c[s] = h), h
					}(x, d, l);
					c !== e && (c = e, u(c.object)), b = function(t, e, n, i) {
						const r = c.attributes,
							a = e.attributes;
						let s = 0;
						const o = n.getAttributes();
						for (const e in o)
							if (o[e].location >= 0) {
								const n = r[e];
								let i = a[e];
								if (void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor)), void 0 === n) return !0;
								if (n.attribute !== i) return !0;
								if (i && n.data !== i.data) return !0;
								s++
							} return c.attributesNum !== s || c.index !== i
					}(r, x, d, y), b && function(t, e, n, i) {
						const r = {},
							a = e.attributes;
						let s = 0;
						const o = n.getAttributes();
						for (const e in o)
							if (o[e].location >= 0) {
								let n = a[e];
								void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor));
								const i = {};
								i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, s++
							} c.attributes = r, c.attributesNum = s, c.index = i
					}(r, x, d, y)
				} else {
					const t = !0 === l.wireframe;
					c.geometry === x.id && c.program === d.id && c.wireframe === t || (c.geometry = x.id, c.program = d.id, c.wireframe = t, b = !0)
				}
				null !== y && n.update(y, t.ELEMENT_ARRAY_BUFFER), (b || h) && (h = !1, function(r, a, s, o) {
					if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
					f();
					const l = o.attributes,
						c = s.getAttributes(),
						h = a.defaultAttributeValues;
					for (const e in c) {
						const i = c[e];
						if (i.location >= 0) {
							let a = l[e];
							if (void 0 === a && ("instanceMatrix" === e && r.instanceMatrix && (a = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (a = r.instanceColor)), void 0 !== a) {
								const e = a.normalized,
									s = a.itemSize,
									l = n.get(a);
								if (void 0 === l) continue;
								const c = l.buffer,
									h = l.type,
									u = l.bytesPerElement;
								if (a.isInterleavedBufferAttribute) {
									const n = a.data,
										l = n.stride,
										d = a.offset;
									if (n.isInstancedInterleavedBuffer) {
										for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);
										!0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
									} else
										for (let t = 0; t < i.locationSize; t++) m(i.location + t);
									t.bindBuffer(t.ARRAY_BUFFER, c);
									for (let t = 0; t < i.locationSize; t++) v(i.location + t, s / i.locationSize, h, e, l * u, (d + s / i.locationSize * t) * u)
								} else {
									if (a.isInstancedBufferAttribute) {
										for (let t = 0; t < i.locationSize; t++) g(i.location + t, a.meshPerAttribute);
										!0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)
									} else
										for (let t = 0; t < i.locationSize; t++) m(i.location + t);
									t.bindBuffer(t.ARRAY_BUFFER, c);
									for (let t = 0; t < i.locationSize; t++) v(i.location + t, s / i.locationSize, h, e, s * u, s / i.locationSize * t * u)
								}
							} else if (void 0 !== h) {
								const n = h[e];
								if (void 0 !== n) switch (n.length) {
									case 2:
										t.vertexAttrib2fv(i.location, n);
										break;
									case 3:
										t.vertexAttrib3fv(i.location, n);
										break;
									case 4:
										t.vertexAttrib4fv(i.location, n);
										break;
									default:
										t.vertexAttrib1fv(i.location, n)
								}
							}
						}
					}
					_()
				}(r, l, d, x), null !== y && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(y)
					.buffer))
			},
			reset: x,
			resetDefaultState: y,
			dispose: function() {
				x();
				for (const t in o) {
					const e = o[t];
					for (const t in e) {
						const n = e[t];
						for (const t in n) d(n[t].object), delete n[t];
						delete e[t]
					}
					delete o[t]
				}
			},
			releaseStatesOfGeometry: function(t) {
				if (void 0 === o[t.id]) return;
				const e = o[t.id];
				for (const t in e) {
					const n = e[t];
					for (const t in n) d(n[t].object), delete n[t];
					delete e[t]
				}
				delete o[t.id]
			},
			releaseStatesOfProgram: function(t) {
				for (const e in o) {
					const n = o[e];
					if (void 0 === n[t.id]) continue;
					const i = n[t.id];
					for (const t in i) d(i[t].object), delete i[t];
					delete n[t.id]
				}
			},
			initAttributes: f,
			enableAttribute: m,
			disableUnusedAttributes: _
		}
	}

	function Mn(t, e, n, i) {
		const r = i.isWebGL2;
		let a;
		this.setMode = function(t) {
			a = t
		}, this.render = function(e, i) {
			t.drawArrays(a, e, i), n.update(i, a, 1)
		}, this.renderInstances = function(i, s, o) {
			if (0 === o) return;
			let l, c;
			if (r) l = t, c = "drawArraysInstanced";
			else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			l[c](a, i, s, o), n.update(s, a, o)
		}
	}

	function Sn(t, e, n) {
		let i;

		function r(e) {
			if ("highp" === e) {
				if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)
					.precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
					.precision > 0) return "highp";
				e = "mediump"
			}
			return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)
				.precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
				.precision > 0 ? "mediump" : "lowp"
		}
		const a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
		let s = void 0 !== n.precision ? n.precision : "highp";
		const o = r(s);
		o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);
		const l = a || e.has("WEBGL_draw_buffers"),
			c = !0 === n.logarithmicDepthBuffer,
			h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
			u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
			d = t.getParameter(t.MAX_TEXTURE_SIZE),
			p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
			f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
			g = t.getParameter(t.MAX_VARYING_VECTORS),
			_ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
			v = u > 0,
			x = a || e.has("OES_texture_float");
		return {
			isWebGL2: a,
			drawBuffers: l,
			getMaxAnisotropy: function() {
				if (void 0 !== i) return i;
				if (!0 === e.has("EXT_texture_filter_anisotropic")) {
					const n = e.get("EXT_texture_filter_anisotropic");
					i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
				} else i = 0;
				return i
			},
			getMaxPrecision: r,
			precision: s,
			logarithmicDepthBuffer: c,
			maxTextures: h,
			maxVertexTextures: u,
			maxTextureSize: d,
			maxCubemapSize: p,
			maxAttributes: f,
			maxVertexUniforms: m,
			maxVaryings: g,
			maxFragmentUniforms: _,
			vertexTextures: v,
			floatFragmentTextures: x,
			floatVertexTextures: v && x,
			maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0
		}
	}

	function En(t) {
		const e = this;
		let n = null,
			i = 0,
			r = !1,
			a = !1;
		const s = new mt,
			o = new ut,
			l = {
				value: null,
				needsUpdate: !1
			};

		function c() {
			l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
		}

		function h(t, n, i, r) {
			const a = null !== t ? t.length : 0;
			let c = null;
			if (0 !== a) {
				if (c = l.value, !0 !== r || null === c) {
					const e = i + 4 * a,
						r = n.matrixWorldInverse;
					o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
					for (let e = 0, n = i; e !== a; ++e, n += 4) s.copy(t[e])
						.applyMatrix4(r, o), s.normal.toArray(c, n), c[n + 3] = s.constant
				}
				l.value = c, l.needsUpdate = !0
			}
			return e.numPlanes = a, e.numIntersection = 0, c
		}
		this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, a) {
			const s = 0 !== t.length || e || 0 !== i || r;
			return r = e, n = h(t, a, 0), i = t.length, s
		}, this.beginShadows = function() {
			a = !0, h(null)
		}, this.endShadows = function() {
			a = !1, c()
		}, this.setState = function(e, s, o) {
			const u = e.clippingPlanes,
				d = e.clipIntersection,
				p = e.clipShadows,
				f = t.get(e);
			if (!r || null === u || 0 === u.length || a && !p) a ? h(null) : c();
			else {
				const t = a ? 0 : i,
					e = 4 * t;
				let r = f.clippingState || null;
				l.value = r, r = h(u, s, e, o);
				for (let t = 0; t !== e; ++t) r[t] = n[t];
				f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
			}
		}
	}
	let wn;
	xn.physical = {
		uniforms: _e([xn.standard.uniforms, {
			clearcoat: {
				value: 0
			},
			clearcoatMap: {
				value: null
			},
			clearcoatRoughness: {
				value: 0
			},
			clearcoatRoughnessMap: {
				value: null
			},
			clearcoatNormalScale: {
				value: new At(1, 1)
			},
			clearcoatNormalMap: {
				value: null
			},
			iridescence: {
				value: 0
			},
			iridescenceMap: {
				value: null
			},
			iridescenceIOR: {
				value: 1.3
			},
			iridescenceThicknessMinimum: {
				value: 100
			},
			iridescenceThicknessMaximum: {
				value: 400
			},
			iridescenceThicknessMap: {
				value: null
			},
			sheen: {
				value: 0
			},
			sheenColor: {
				value: new Le(0)
			},
			sheenColorMap: {
				value: null
			},
			sheenRoughness: {
				value: 1
			},
			sheenRoughnessMap: {
				value: null
			},
			transmission: {
				value: 0
			},
			transmissionMap: {
				value: null
			},
			transmissionSamplerSize: {
				value: new At
			},
			transmissionSamplerMap: {
				value: null
			},
			thickness: {
				value: 0
			},
			thicknessMap: {
				value: null
			},
			attenuationDistance: {
				value: 0
			},
			attenuationColor: {
				value: new Le(0)
			},
			specularIntensity: {
				value: 1
			},
			specularIntensityMap: {
				value: null
			},
			specularColor: {
				value: new Le(1, 1, 1)
			},
			specularColorMap: {
				value: null
			}
		}]),
		vertexShader: _n.meshphysical_vert,
		fragmentShader: _n.meshphysical_frag
	};
	class Tn {
		static getDataURL(t) {
			if (/^data:/i.test(t.src)) return t.src;
			if ("undefined" == typeof HTMLCanvasElement) return t.src;
			let e;
			if (t instanceof HTMLCanvasElement) e = t;
			else {
				void 0 === wn && (wn = ie("canvas")), wn.width = t.width, wn.height = t.height;
				const n = wn.getContext("2d");
				t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = wn
			}
			return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
		}
		static sRGBToLinear(t) {
			if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
				const e = ie("canvas");
				e.width = t.width, e.height = t.height;
				const n = e.getContext("2d");
				n.drawImage(t, 0, 0, t.width, t.height);
				const i = n.getImageData(0, 0, t.width, t.height),
					r = i.data;
				for (let t = 0; t < r.length; t++) r[t] = 255 * ye(r[t] / 255);
				return n.putImageData(i, 0, 0), e
			}
			if (t.data) {
				const e = t.data.slice(0);
				for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * ye(e[t] / 255)) : e[t] = ye(e[t]);
				return {
					data: e,
					width: t.width,
					height: t.height
				}
			}
			return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
		}
	}
	class An {
		constructor(t = null) {
			this.isSource = !0, this.uuid = N(), this.data = t, this.version = 0
		}
		set needsUpdate(t) {
			!0 === t && this.version++
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
			const n = {
					uuid: this.uuid,
					url: ""
				},
				i = this.data;
			if (null !== i) {
				let t;
				if (Array.isArray(i)) {
					t = [];
					for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(Rn(i[e].image)) : t.push(Rn(i[e]))
				} else t = Rn(i);
				n.url = t
			}
			return e || (t.images[this.uuid] = n), n
		}
	}

	function Rn(t) {
		return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Tn.getDataURL(t) : t.data ? {
			data: Array.from(t.data),
			width: t.width,
			height: t.height,
			type: t.data.constructor.name
		} : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
	}
	let Cn = 0;
	class Ln extends Pt {
		constructor(t = Ln.DEFAULT_IMAGE, e = Ln.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, s = 1023, o = 1009, l = 1, c = 3e3) {
			super(), this.isTexture = !0, Object.defineProperty(this, "id", {
				value: Cn++
			}), this.uuid = N(), this.name = "", this.source = new An(t), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, this.offset = new At(0, 0), this.repeat = new At(1, 1), this.center = new At(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ut, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
		}
		get image() {
			return this.source.data
		}
		set image(t) {
			this.source.data = t
		}
		updateMatrix() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
			const n = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				image: this.source.toJSON(t)
					.uuid,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				type: this.type,
				encoding: this.encoding,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};
			return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n
		}
		dispose() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
		transformUv(t) {
			if (300 !== this.mapping) return t;
			if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
				case s:
					t.x = t.x - Math.floor(t.x);
					break;
				case o:
					t.x = t.x < 0 ? 0 : 1;
					break;
				case l:
					1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
			}
			if (t.y < 0 || t.y > 1) switch (this.wrapT) {
				case s:
					t.y = t.y - Math.floor(t.y);
					break;
				case o:
					t.y = t.y < 0 ? 0 : 1;
					break;
				case l:
					1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
			}
			return this.flipY && (t.y = 1 - t.y), t
		}
		set needsUpdate(t) {
			!0 === t && (this.version++, this.source.needsUpdate = !0)
		}
	}
	Ln.DEFAULT_IMAGE = null, Ln.DEFAULT_MAPPING = 300;
	class Pn extends Pt {
		constructor(t, e, n = {}) {
			super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Rt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Rt(0, 0, t, e);
			const i = {
				width: t,
				height: e,
				depth: 1
			};
			this.texture = new Ln(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : h, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0
		}
		setSize(t, e, n = 1) {
			this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
			const e = Object.assign({}, t.texture.image);
			return this.texture.source = new An(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
		}
		dispose() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}
	class Dn extends ee {
		constructor() {
			super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new xt, this.projectionMatrix = new xt, this.projectionMatrixInverse = new xt
		}
		copy(t, e) {
			return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
		}
		getWorldDirection(t) {
			this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(-e[8], -e[9], -e[10])
				.normalize()
		}
		updateMatrixWorld(t) {
			super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld)
				.invert()
		}
		updateWorldMatrix(t, e) {
			super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld)
				.invert()
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
	}
	class On extends Dn {
		constructor(t = 50, e = 1, n = .1, i = 2e3) {
			super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
		}
		copy(t, e) {
			return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
		}
		setFocalLength(t) {
			const e = .5 * this.getFilmHeight() / t;
			this.fov = 2 * O * Math.atan(e), this.updateProjectionMatrix()
		}
		getFocalLength() {
			const t = Math.tan(.5 * D * this.fov);
			return .5 * this.getFilmHeight() / t
		}
		getEffectiveFOV() {
			return 2 * O * Math.atan(Math.tan(.5 * D * this.fov) / this.zoom)
		}
		getFilmWidth() {
			return this.filmGauge * Math.min(this.aspect, 1)
		}
		getFilmHeight() {
			return this.filmGauge / Math.max(this.aspect, 1)
		}
		setViewOffset(t, e, n, i, r, a) {
			this.aspect = t / e, null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
		}
		clearViewOffset() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		}
		updateProjectionMatrix() {
			const t = this.near;
			let e = t * Math.tan(.5 * D * this.fov) / this.zoom,
				n = 2 * e,
				i = this.aspect * n,
				r = -.5 * i;
			const a = this.view;
			if (null !== this.view && this.view.enabled) {
				const t = a.fullWidth,
					s = a.fullHeight;
				r += a.offsetX * i / t, e -= a.offsetY * n / s, i *= a.width / t, n *= a.height / s
			}
			const s = this.filmOffset;
			0 !== s && (r += t * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix)
				.invert()
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
		}
	}
	const Nn = 90;
	class In extends ee {
		constructor(t, e, n) {
			super(), this.type = "CubeCamera", this.renderTarget = n;
			const i = new On(Nn, 1, t, e);
			i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new G(1, 0, 0)), this.add(i);
			const r = new On(Nn, 1, t, e);
			r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new G(-1, 0, 0)), this.add(r);
			const a = new On(Nn, 1, t, e);
			a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new G(0, 1, 0)), this.add(a);
			const s = new On(Nn, 1, t, e);
			s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(new G(0, -1, 0)), this.add(s);
			const o = new On(Nn, 1, t, e);
			o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new G(0, 0, 1)), this.add(o);
			const l = new On(Nn, 1, t, e);
			l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new G(0, 0, -1)), this.add(l)
		}
		update(t, e) {
			null === this.parent && this.updateMatrixWorld();
			const n = this.renderTarget,
				[i, r, a, s, o, l] = this.children,
				c = t.getRenderTarget(),
				h = t.toneMapping,
				u = t.xr.enabled;
			t.toneMapping = 0, t.xr.enabled = !1;
			const d = n.texture.generateMipmaps;
			n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = d, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = h, t.xr.enabled = u, n.texture.needsPMREMUpdate = !0
		}
	}
	class Un extends Ln {
		constructor(t, e, n, r, a, s, o, l, c, h) {
			super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : i, n, r, a, s, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1
		}
		get images() {
			return this.image
		}
		set images(t) {
			this.image = t
		}
	}
	class Fn extends Pn {
		constructor(t, e = {}) {
			super(t, t, e), this.isWebGLCubeRenderTarget = !0;
			const n = {
					width: t,
					height: t,
					depth: 1
				},
				i = [n, n, n, n, n, n];
			this.texture = new Un(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : h
		}
		fromEquirectangularTexture(t, e) {
			this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
			const n = {
					tEquirect: {
						value: null
					}
				},
				i = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
				r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
				a = new de(5, 5, 5),
				s = new xe({
					name: "CubemapFromEquirect",
					uniforms: ge(n),
					vertexShader: i,
					fragmentShader: r,
					side: 1,
					blending: 0
				});
			s.uniforms.tEquirect.value = e;
			const o = new mn(a, s),
				l = e.minFilter;
			return e.minFilter === u && (e.minFilter = h), new In(1, 10, this)
				.update(t, o), e.minFilter = l, o.geometry.dispose(), o.material.dispose(), this
		}
		clear(t, e, n, i) {
			const r = t.getRenderTarget();
			for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
			t.setRenderTarget(r)
		}
	}

	function zn(t) {
		let e = new WeakMap;

		function n(t, e) {
			return 303 === e ? t.mapping = i : 304 === e && (t.mapping = r), t
		}

		function a(t) {
			const n = t.target;
			n.removeEventListener("dispose", a);
			const i = e.get(n);
			void 0 !== i && (e.delete(n), i.dispose())
		}
		return {
			get: function(i) {
				if (i && i.isTexture && !1 === i.isRenderTargetTexture) {
					const r = i.mapping;
					if (303 === r || 304 === r) {
						if (e.has(i)) return n(e.get(i)
							.texture, i.mapping); {
							const r = i.image;
							if (r && r.height > 0) {
								const s = new Fn(r.height / 2);
								return s.fromEquirectangularTexture(t, i), e.set(i, s), i.addEventListener("dispose", a), n(s.texture, i.mapping)
							}
							return null
						}
					}
				}
				return i
			},
			dispose: function() {
				e = new WeakMap
			}
		}
	}
	class Bn extends Dn {
		constructor(t = -1, e = 1, n = 1, i = -1, r = .1, a = 2e3) {
			super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix()
		}
		copy(t, e) {
			return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
		}
		setViewOffset(t, e, n, i, r, a) {
			null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
		}
		clearViewOffset() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		}
		updateProjectionMatrix() {
			const t = (this.right - this.left) / (2 * this.zoom),
				e = (this.top - this.bottom) / (2 * this.zoom),
				n = (this.right + this.left) / 2,
				i = (this.top + this.bottom) / 2;
			let r = n - t,
				a = n + t,
				s = i + e,
				o = i - e;
			if (null !== this.view && this.view.enabled) {
				const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
					e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
				r += t * this.view.offsetX, a = r + t * this.view.width, s -= e * this.view.offsetY, o = s - e * this.view.height
			}
			this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix)
				.invert()
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
		}
	}
	const Hn = [.125, .215, .35, .446, .526, .582],
		kn = new Bn,
		Gn = new Le;
	let Vn = null;
	const Wn = (1 + Math.sqrt(5)) / 2,
		Xn = 1 / Wn,
		jn = [new G(1, 1, 1), new G(-1, 1, 1), new G(1, 1, -1), new G(-1, 1, -1), new G(0, Wn, Xn), new G(0, Wn, -Xn), new G(Xn, 0, Wn), new G(-Xn, 0, Wn), new G(Wn, Xn, 0), new G(-Wn, Xn, 0)];
	class qn {
		constructor(t) {
			this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
		}
		fromScene(t, e = 0, n = .1, i = 100) {
			Vn = this._renderer.getRenderTarget(), this._setSize(256);
			const r = this._allocateTargets();
			return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
		}
		fromEquirectangular(t, e = null) {
			return this._fromTexture(t, e)
		}
		fromCubemap(t, e = null) {
			return this._fromTexture(t, e)
		}
		compileCubemapShader() {
			null === this._cubemapMaterial && (this._cubemapMaterial = Kn(), this._compileMaterial(this._cubemapMaterial))
		}
		compileEquirectangularShader() {
			null === this._equirectMaterial && (this._equirectMaterial = Jn(), this._compileMaterial(this._equirectMaterial))
		}
		dispose() {
			this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
		}
		_setSize(t) {
			this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
		}
		_dispose() {
			null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
			for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
		}
		_cleanup(t) {
			this._renderer.setRenderTarget(Vn), t.scissorTest = !1, Zn(t, 0, 0, t.width, t.height)
		}
		_fromTexture(t, e) {
			t.mapping === i || t.mapping === r ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Vn = this._renderer.getRenderTarget();
			const n = e || this._allocateTargets();
			return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
		}
		_allocateTargets() {
			const t = 3 * Math.max(this._cubeSize, 112),
				e = 4 * this._cubeSize,
				n = {
					magFilter: h,
					minFilter: h,
					generateMipmaps: !1,
					type: m,
					format: _,
					encoding: E,
					depthBuffer: !1
				},
				i = Yn(t, e, n);
			if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
				null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Yn(t, e, n);
				const {
					_lodMax: i
				} = this;
				({
					sizeLods: this._sizeLods,
					lodPlanes: this._lodPlanes,
					sigmas: this._sigmas
				} = function(t) {
					const e = [],
						n = [],
						i = [];
					let r = t;
					const a = t - 4 + 1 + Hn.length;
					for (let s = 0; s < a; s++) {
						const a = Math.pow(2, r);
						n.push(a);
						let o = 1 / a;
						s > t - 4 ? o = Hn[s - t + 4 - 1] : 0 === s && (o = 0), i.push(o);
						const l = 1 / (a - 2),
							c = -l,
							h = 1 + l,
							u = [c, c, h, c, h, h, c, c, h, h, c, h],
							d = 6,
							p = 6,
							f = 3,
							m = 2,
							g = 1,
							_ = new Float32Array(f * p * d),
							v = new Float32Array(m * p * d),
							x = new Float32Array(g * p * d);
						for (let t = 0; t < d; t++) {
							const e = t % 3 * 2 / 3 - 1,
								n = t > 2 ? 0 : -1,
								i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
							_.set(i, f * p * t), v.set(u, m * p * t);
							const r = [t, t, t, t, t, t];
							x.set(r, g * p * t)
						}
						const y = new ue;
						y.setAttribute("position", new Nt(_, f)), y.setAttribute("uv", new Nt(v, m)), y.setAttribute("faceIndex", new Nt(x, g)), e.push(y), r > 4 && r--
					}
					return {
						lodPlanes: e,
						sizeLods: n,
						sigmas: i
					}
				}(i)), this._blurMaterial = function(t, e, n) {
					const i = new Float32Array(20),
						r = new G(0, 1, 0);
					return new xe({
						name: "SphericalGaussianBlur",
						defines: {
							n: 20,
							CUBEUV_TEXEL_WIDTH: 1 / e,
							CUBEUV_TEXEL_HEIGHT: 1 / n,
							CUBEUV_MAX_MIP: `${t}.0`
						},
						uniforms: {
							envMap: {
								value: null
							},
							samples: {
								value: 1
							},
							weights: {
								value: i
							},
							latitudinal: {
								value: !1
							},
							dTheta: {
								value: 0
							},
							mipInt: {
								value: 0
							},
							poleAxis: {
								value: r
							}
						},
						vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
						fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
						blending: 0,
						depthTest: !1,
						depthWrite: !1
					})
				}(i, t, e)
			}
			return i
		}
		_compileMaterial(t) {
			const e = new mn(this._lodPlanes[0], t);
			this._renderer.compile(e, kn)
		}
		_sceneToCubeUV(t, e, n, i) {
			const r = new On(90, 1, e, n),
				a = [1, -1, 1, 1, 1, 1],
				s = [1, 1, 1, -1, -1, -1],
				o = this._renderer,
				l = o.autoClear,
				c = o.toneMapping;
			o.getClearColor(Gn), o.toneMapping = 0, o.autoClear = !1;
			const h = new Je({
					name: "PMREM.Background",
					side: 1,
					depthWrite: !1,
					depthTest: !1
				}),
				u = new mn(new de, h);
			let d = !1;
			const p = t.background;
			p ? p.isColor && (h.color.copy(p), t.background = null, d = !0) : (h.color.copy(Gn), d = !0);
			for (let e = 0; e < 6; e++) {
				const n = e % 3;
				0 === n ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0)) : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
				const l = this._cubeSize;
				Zn(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t, r)
			}
			u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = p
		}
		_textureToCubeUV(t, e) {
			const n = this._renderer,
				a = t.mapping === i || t.mapping === r;
			a ? (null === this._cubemapMaterial && (this._cubemapMaterial = Kn()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Jn());
			const s = a ? this._cubemapMaterial : this._equirectMaterial,
				o = new mn(this._lodPlanes[0], s);
			s.uniforms.envMap.value = t;
			const l = this._cubeSize;
			Zn(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, kn)
		}
		_applyPMREM(t) {
			const e = this._renderer,
				n = e.autoClear;
			e.autoClear = !1;
			for (let e = 1; e < this._lodPlanes.length; e++) {
				const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
					i = jn[(e - 1) % jn.length];
				this._blur(t, e - 1, e, n, i)
			}
			e.autoClear = n
		}
		_blur(t, e, n, i, r) {
			const a = this._pingPongRenderTarget;
			this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r)
		}
		_halfBlur(t, e, n, i, r, a, s) {
			const o = this._renderer,
				l = this._blurMaterial;
			"latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
			const c = new mn(this._lodPlanes[i], l),
				h = l.uniforms,
				u = this._sizeLods[n] - 1,
				d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
				p = r / d,
				f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
			f > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
			const m = [];
			let g = 0;
			for (let t = 0; t < 20; ++t) {
				const e = t / p,
					n = Math.exp(-e * e / 2);
				m.push(n), 0 === t ? g += n : t < f && (g += 2 * n)
			}
			for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
			h.envMap.value = t.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === a, s && (h.poleAxis.value = s);
			const {
				_lodMax: _
			} = this;
			h.dTheta.value = d, h.mipInt.value = _ - n;
			const v = this._sizeLods[i];
			Zn(e, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, kn)
		}
	}

	function Yn(t, e, n) {
		const i = new Pn(t, e, n);
		return i.texture.mapping = a, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i
	}

	function Zn(t, e, n, i, r) {
		t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
	}

	function Jn() {
		return new xe({
			name: "EquirectangularToCubeUV",
			uniforms: {
				envMap: {
					value: null
				}
			},
			vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
			fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		})
	}

	function Kn() {
		return new xe({
			name: "CubemapToCubeUV",
			uniforms: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				}
			},
			vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
			fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		})
	}

	function Qn(t) {
		let e = new WeakMap,
			n = null;

		function a(t) {
			const n = t.target;
			n.removeEventListener("dispose", a);
			const i = e.get(n);
			void 0 !== i && (e.delete(n), i.dispose())
		}
		return {
			get: function(s) {
				if (s && s.isTexture) {
					const o = s.mapping,
						l = 303 === o || 304 === o,
						c = o === i || o === r;
					if (l || c) {
						if (s.isRenderTargetTexture && !0 === s.needsPMREMUpdate) {
							s.needsPMREMUpdate = !1;
							let i = e.get(s);
							return null === n && (n = new qn(t)), i = l ? n.fromEquirectangular(s, i) : n.fromCubemap(s, i), e.set(s, i), i.texture
						}
						if (e.has(s)) return e.get(s)
							.texture; {
							const i = s.image;
							if (l && i && i.height > 0 || c && i && function(t) {
								let e = 0;
								for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
								return 6 === e
							}(i)) {
								null === n && (n = new qn(t));
								const i = l ? n.fromEquirectangular(s) : n.fromCubemap(s);
								return e.set(s, i), s.addEventListener("dispose", a), i.texture
							}
							return null
						}
					}
				}
				return s
			},
			dispose: function() {
				e = new WeakMap, null !== n && (n.dispose(), n = null)
			}
		}
	}

	function $n(t) {
		const e = {};

		function n(n) {
			if (void 0 !== e[n]) return e[n];
			let i;
			switch (n) {
				case "WEBGL_depth_texture":
					i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
					break;
				case "EXT_texture_filter_anisotropic":
					i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
					break;
				case "WEBGL_compressed_texture_s3tc":
					i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
					break;
				case "WEBGL_compressed_texture_pvrtc":
					i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
					break;
				default:
					i = t.getExtension(n)
			}
			return e[n] = i, i
		}
		return {
			has: function(t) {
				return null !== n(t)
			},
			init: function(t) {
				t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
			},
			get: function(t) {
				const e = n(t);
				return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
			}
		}
	}

	function ti(t, e, n, i) {
		const r = {},
			a = new WeakMap;

		function s(t) {
			const o = t.target;
			null !== o.index && e.remove(o.index);
			for (const t in o.attributes) e.remove(o.attributes[t]);
			o.removeEventListener("dispose", s), delete r[o.id];
			const l = a.get(o);
			l && (e.remove(l), a.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
		}

		function o(t) {
			const n = [],
				i = t.index,
				r = t.attributes.position;
			let s = 0;
			if (null !== i) {
				const t = i.array;
				s = i.version;
				for (let e = 0, i = t.length; e < i; e += 3) {
					const i = t[e + 0],
						r = t[e + 1],
						a = t[e + 2];
					n.push(i, r, r, a, a, i)
				}
			} else {
				const t = r.array;
				s = r.version;
				for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
					const t = e + 0,
						i = e + 1,
						r = e + 2;
					n.push(t, i, i, r, r, t)
				}
			}
			const o = new(ne(n) ? Ut : It)(n, 1);
			o.version = s;
			const l = a.get(t);
			l && e.remove(l), a.set(t, o)
		}
		return {
			get: function(t, e) {
				return !0 === r[e.id] || (e.addEventListener("dispose", s), r[e.id] = !0, n.memory.geometries++), e
			},
			update: function(n) {
				const i = n.attributes;
				for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
				const r = n.morphAttributes;
				for (const n in r) {
					const i = r[n];
					for (let n = 0, r = i.length; n < r; n++) e.update(i[n], t.ARRAY_BUFFER)
				}
			},
			getWireframeAttribute: function(t) {
				const e = a.get(t);
				if (e) {
					const n = t.index;
					null !== n && e.version < n.version && o(t)
				} else o(t);
				return a.get(t)
			}
		}
	}

	function ei(t, e, n, i) {
		const r = i.isWebGL2;
		let a, s, o;
		this.setMode = function(t) {
			a = t
		}, this.setIndex = function(t) {
			s = t.type, o = t.bytesPerElement
		}, this.render = function(e, i) {
			t.drawElements(a, i, s, e * o), n.update(i, a, 1)
		}, this.renderInstances = function(i, l, c) {
			if (0 === c) return;
			let h, u;
			if (r) h = t, u = "drawElementsInstanced";
			else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			h[u](a, l, s, i * o, c), n.update(l, a, c)
		}
	}

	function ni(t) {
		const e = {
			frame: 0,
			calls: 0,
			triangles: 0,
			points: 0,
			lines: 0
		};
		return {
			memory: {
				geometries: 0,
				textures: 0
			},
			render: e,
			programs: null,
			autoReset: !0,
			reset: function() {
				e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
			},
			update: function(n, i, r) {
				switch (e.calls++, i) {
					case t.TRIANGLES:
						e.triangles += r * (n / 3);
						break;
					case t.LINES:
						e.lines += r * (n / 2);
						break;
					case t.LINE_STRIP:
						e.lines += r * (n - 1);
						break;
					case t.LINE_LOOP:
						e.lines += r * n;
						break;
					case t.POINTS:
						e.points += r * n;
						break;
					default:
						console.error("THREE.WebGLInfo: Unknown draw mode:", i)
				}
			}
		}
	}
	class ii extends Ln {
		constructor(t = null, e = 1, n = 1, i = 1) {
			super(null), this.isDataArrayTexture = !0, this.image = {
				data: t,
				width: e,
				height: n,
				depth: i
			}, this.magFilter = c, this.minFilter = c, this.wrapR = o, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
		}
	}

	function ri(t, e) {
		return t[0] - e[0]
	}

	function ai(t, e) {
		return Math.abs(e[1]) - Math.abs(t[1])
	}

	function si(t, e, n) {
		const i = {},
			r = new Float32Array(8),
			a = new WeakMap,
			s = new Rt,
			o = [];
		for (let t = 0; t < 8; t++) o[t] = [t, 0];
		return {
			update: function(l, c, h, u) {
				const d = l.morphTargetInfluences;
				if (!0 === e.isWebGL2) {
					const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
						m = void 0 !== p ? p.length : 0;
					let g = a.get(c);
					if (void 0 === g || g.count !== m) {
						void 0 !== g && g.texture.dispose();
						const x = void 0 !== c.morphAttributes.position,
							y = void 0 !== c.morphAttributes.normal,
							b = void 0 !== c.morphAttributes.color,
							M = c.morphAttributes.position || [],
							S = c.morphAttributes.normal || [],
							E = c.morphAttributes.color || [];
						let w = 0;
						!0 === x && (w = 1), !0 === y && (w = 2), !0 === b && (w = 3);
						let T = c.attributes.position.count * w,
							A = 1;
						T > e.maxTextureSize && (A = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
						const R = new Float32Array(T * A * 4 * m),
							C = new ii(R, T, A, m);
						C.type = f, C.needsUpdate = !0;
						const L = 4 * w;
						for (let D = 0; D < m; D++) {
							const O = M[D],
								N = S[D],
								I = E[D],
								U = T * A * 4 * D;
							for (let F = 0; F < O.count; F++) {
								const z = F * L;
								!0 === x && (s.fromBufferAttribute(O, F), R[U + z + 0] = s.x, R[U + z + 1] = s.y, R[U + z + 2] = s.z, R[U + z + 3] = 0), !0 === y && (s.fromBufferAttribute(N, F), R[U + z + 4] = s.x, R[U + z + 5] = s.y, R[U + z + 6] = s.z, R[U + z + 7] = 0), !0 === b && (s.fromBufferAttribute(I, F), R[U + z + 8] = s.x, R[U + z + 9] = s.y, R[U + z + 10] = s.z, R[U + z + 11] = 4 === I.itemSize ? s.w : 1)
							}
						}

						function P() {
							C.dispose(), a.delete(c), c.removeEventListener("dispose", P)
						}
						g = {
							count: m,
							texture: C,
							size: new At(T, A)
						}, a.set(c, g), c.addEventListener("dispose", P)
					}
					let _ = 0;
					for (let B = 0; B < d.length; B++) _ += d[B];
					const v = c.morphTargetsRelative ? 1 : 1 - _;
					u.getUniforms()
						.setValue(t, "morphTargetBaseInfluence", v), u.getUniforms()
						.setValue(t, "morphTargetInfluences", d), u.getUniforms()
						.setValue(t, "morphTargetsTexture", g.texture, n), u.getUniforms()
						.setValue(t, "morphTargetsTextureSize", g.size)
				} else {
					const H = void 0 === d ? 0 : d.length;
					let k = i[c.id];
					if (void 0 === k || k.length !== H) {
						k = [];
						for (let j = 0; j < H; j++) k[j] = [j, 0];
						i[c.id] = k
					}
					for (let q = 0; q < H; q++) {
						const Y = k[q];
						Y[0] = q, Y[1] = d[q]
					}
					k.sort(ai);
					for (let Z = 0; Z < 8; Z++) Z < H && k[Z][1] ? (o[Z][0] = k[Z][0], o[Z][1] = k[Z][1]) : (o[Z][0] = Number.MAX_SAFE_INTEGER, o[Z][1] = 0);
					o.sort(ri);
					const G = c.morphAttributes.position,
						V = c.morphAttributes.normal;
					let W = 0;
					for (let J = 0; J < 8; J++) {
						const K = o[J],
							Q = K[0],
							$ = K[1];
						Q !== Number.MAX_SAFE_INTEGER && $ ? (G && c.getAttribute("morphTarget" + J) !== G[Q] && c.setAttribute("morphTarget" + J, G[Q]), V && c.getAttribute("morphNormal" + J) !== V[Q] && c.setAttribute("morphNormal" + J, V[Q]), r[J] = $, W += $) : (G && !0 === c.hasAttribute("morphTarget" + J) && c.deleteAttribute("morphTarget" + J), V && !0 === c.hasAttribute("morphNormal" + J) && c.deleteAttribute("morphNormal" + J), r[J] = 0)
					}
					const X = c.morphTargetsRelative ? 1 : 1 - W;
					u.getUniforms()
						.setValue(t, "morphTargetBaseInfluence", X), u.getUniforms()
						.setValue(t, "morphTargetInfluences", r)
				}
			}
		}
	}

	function oi(t, e, n, i) {
		let r = new WeakMap;

		function a(t) {
			const e = t.target;
			e.removeEventListener("dispose", a), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
		}
		return {
			update: function(s) {
				const o = i.render.frame,
					l = s.geometry,
					c = e.get(s, l);
				return r.get(c) !== o && (e.update(c), r.set(c, o)), s.isInstancedMesh && (!1 === s.hasEventListener("dispose", a) && s.addEventListener("dispose", a), n.update(s.instanceMatrix, t.ARRAY_BUFFER), null !== s.instanceColor && n.update(s.instanceColor, t.ARRAY_BUFFER)), c
			},
			dispose: function() {
				r = new WeakMap
			}
		}
	}
	class li extends Ln {
		constructor(t = null, e = 1, n = 1, i = 1) {
			super(null), this.isData3DTexture = !0, this.image = {
				data: t,
				width: e,
				height: n,
				depth: i
			}, this.magFilter = c, this.minFilter = c, this.wrapR = o, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
		}
	}
	const ci = new Ln,
		hi = new ii,
		ui = new li,
		di = new Un,
		pi = [],
		fi = [],
		mi = new Float32Array(16),
		gi = new Float32Array(9),
		_i = new Float32Array(4);

	function vi(t, e, n) {
		const i = t[0];
		if (i <= 0 || i > 0) return t;
		const r = e * n;
		let a = pi[r];
		if (void 0 === a && (a = new Float32Array(r), pi[r] = a), 0 !== e) {
			i.toArray(a, 0);
			for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(a, r)
		}
		return a
	}

	function xi(t, e) {
		if (t.length !== e.length) return !1;
		for (let n = 0, i = t.length; n < i; n++)
			if (t[n] !== e[n]) return !1;
		return !0
	}

	function yi(t, e) {
		for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
	}

	function bi(t, e) {
		let n = fi[e];
		void 0 === n && (n = new Int32Array(e), fi[e] = n);
		for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
		return n
	}

	function Mi(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
	}

	function Si(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
		else {
			if (xi(n, e)) return;
			t.uniform2fv(this.addr, e), yi(n, e)
		}
	}

	function Ei(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
		else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
		else {
			if (xi(n, e)) return;
			t.uniform3fv(this.addr, e), yi(n, e)
		}
	}

	function wi(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
		else {
			if (xi(n, e)) return;
			t.uniform4fv(this.addr, e), yi(n, e)
		}
	}

	function Ti(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (xi(n, e)) return;
			t.uniformMatrix2fv(this.addr, !1, e), yi(n, e)
		} else {
			if (xi(n, i)) return;
			_i.set(i), t.uniformMatrix2fv(this.addr, !1, _i), yi(n, i)
		}
	}

	function Ai(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (xi(n, e)) return;
			t.uniformMatrix3fv(this.addr, !1, e), yi(n, e)
		} else {
			if (xi(n, i)) return;
			gi.set(i), t.uniformMatrix3fv(this.addr, !1, gi), yi(n, i)
		}
	}

	function Ri(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (xi(n, e)) return;
			t.uniformMatrix4fv(this.addr, !1, e), yi(n, e)
		} else {
			if (xi(n, i)) return;
			mi.set(i), t.uniformMatrix4fv(this.addr, !1, mi), yi(n, i)
		}
	}

	function Ci(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
	}

	function Li(t, e) {
		const n = this.cache;
		xi(n, e) || (t.uniform2iv(this.addr, e), yi(n, e))
	}

	function Pi(t, e) {
		const n = this.cache;
		xi(n, e) || (t.uniform3iv(this.addr, e), yi(n, e))
	}

	function Di(t, e) {
		const n = this.cache;
		xi(n, e) || (t.uniform4iv(this.addr, e), yi(n, e))
	}

	function Oi(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
	}

	function Ni(t, e) {
		const n = this.cache;
		xi(n, e) || (t.uniform2uiv(this.addr, e), yi(n, e))
	}

	function Ii(t, e) {
		const n = this.cache;
		xi(n, e) || (t.uniform3uiv(this.addr, e), yi(n, e))
	}

	function Ui(t, e) {
		const n = this.cache;
		xi(n, e) || (t.uniform4uiv(this.addr, e), yi(n, e))
	}

	function Fi(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || ci, r)
	}

	function zi(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || ui, r)
	}

	function Bi(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || di, r)
	}

	function Hi(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || hi, r)
	}

	function ki(t, e) {
		t.uniform1fv(this.addr, e)
	}

	function Gi(t, e) {
		const n = vi(e, this.size, 2);
		t.uniform2fv(this.addr, n)
	}

	function Vi(t, e) {
		const n = vi(e, this.size, 3);
		t.uniform3fv(this.addr, n)
	}

	function Wi(t, e) {
		const n = vi(e, this.size, 4);
		t.uniform4fv(this.addr, n)
	}

	function Xi(t, e) {
		const n = vi(e, this.size, 4);
		t.uniformMatrix2fv(this.addr, !1, n)
	}

	function ji(t, e) {
		const n = vi(e, this.size, 9);
		t.uniformMatrix3fv(this.addr, !1, n)
	}

	function qi(t, e) {
		const n = vi(e, this.size, 16);
		t.uniformMatrix4fv(this.addr, !1, n)
	}

	function Yi(t, e) {
		t.uniform1iv(this.addr, e)
	}

	function Zi(t, e) {
		t.uniform2iv(this.addr, e)
	}

	function Ji(t, e) {
		t.uniform3iv(this.addr, e)
	}

	function Ki(t, e) {
		t.uniform4iv(this.addr, e)
	}

	function Qi(t, e) {
		t.uniform1uiv(this.addr, e)
	}

	function $i(t, e) {
		t.uniform2uiv(this.addr, e)
	}

	function tr(t, e) {
		t.uniform3uiv(this.addr, e)
	}

	function er(t, e) {
		t.uniform4uiv(this.addr, e)
	}

	function nr(t, e, n) {
		const i = this.cache,
			r = e.length,
			a = bi(n, r);
		xi(i, a) || (t.uniform1iv(this.addr, a), yi(i, a));
		for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || ci, a[t])
	}

	function ir(t, e, n) {
		const i = this.cache,
			r = e.length,
			a = bi(n, r);
		xi(i, a) || (t.uniform1iv(this.addr, a), yi(i, a));
		for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || ui, a[t])
	}

	function rr(t, e, n) {
		const i = this.cache,
			r = e.length,
			a = bi(n, r);
		xi(i, a) || (t.uniform1iv(this.addr, a), yi(i, a));
		for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || di, a[t])
	}

	function ar(t, e, n) {
		const i = this.cache,
			r = e.length,
			a = bi(n, r);
		xi(i, a) || (t.uniform1iv(this.addr, a), yi(i, a));
		for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || hi, a[t])
	}
	class sr {
		constructor(t, e, n) {
			this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
				switch (t) {
					case 5126:
						return Mi;
					case 35664:
						return Si;
					case 35665:
						return Ei;
					case 35666:
						return wi;
					case 35674:
						return Ti;
					case 35675:
						return Ai;
					case 35676:
						return Ri;
					case 5124:
					case 35670:
						return Ci;
					case 35667:
					case 35671:
						return Li;
					case 35668:
					case 35672:
						return Pi;
					case 35669:
					case 35673:
						return Di;
					case 5125:
						return Oi;
					case 36294:
						return Ni;
					case 36295:
						return Ii;
					case 36296:
						return Ui;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return Fi;
					case 35679:
					case 36299:
					case 36307:
						return zi;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return Bi;
					case 36289:
					case 36303:
					case 36311:
					case 36292:
						return Hi
				}
			}(e.type)
		}
	}
	class or {
		constructor(t, e, n) {
			this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
				switch (t) {
					case 5126:
						return ki;
					case 35664:
						return Gi;
					case 35665:
						return Vi;
					case 35666:
						return Wi;
					case 35674:
						return Xi;
					case 35675:
						return ji;
					case 35676:
						return qi;
					case 5124:
					case 35670:
						return Yi;
					case 35667:
					case 35671:
						return Zi;
					case 35668:
					case 35672:
						return Ji;
					case 35669:
					case 35673:
						return Ki;
					case 5125:
						return Qi;
					case 36294:
						return $i;
					case 36295:
						return tr;
					case 36296:
						return er;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return nr;
					case 35679:
					case 36299:
					case 36307:
						return ir;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return rr;
					case 36289:
					case 36303:
					case 36311:
					case 36292:
						return ar
				}
			}(e.type)
		}
	}
	class lr {
		constructor(t) {
			this.id = t, this.seq = [], this.map = {}
		}
		setValue(t, e, n) {
			const i = this.seq;
			for (let r = 0, a = i.length; r !== a; ++r) {
				const a = i[r];
				a.setValue(t, e[a.id], n)
			}
		}
	}
	const cr = /(\w+)(\])?(\[|\.)?/g;

	function hr(t, e) {
		t.seq.push(e), t.map[e.id] = e
	}

	function ur(t, e, n) {
		const i = t.name,
			r = i.length;
		for (cr.lastIndex = 0;;) {
			const a = cr.exec(i),
				s = cr.lastIndex;
			let o = a[1];
			const l = "]" === a[2],
				c = a[3];
			if (l && (o |= 0), void 0 === c || "[" === c && s + 2 === r) {
				hr(n, void 0 === c ? new sr(o, t, e) : new or(o, t, e));
				break
			} {
				let t = n.map[o];
				void 0 === t && (t = new lr(o), hr(n, t)), n = t
			}
		}
	}
	class dr {
		constructor(t, e) {
			this.seq = [], this.map = {};
			const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
			for (let i = 0; i < n; ++i) {
				const n = t.getActiveUniform(e, i);
				ur(n, t.getUniformLocation(e, n.name), this)
			}
		}
		setValue(t, e, n, i) {
			const r = this.map[e];
			void 0 !== r && r.setValue(t, n, i)
		}
		setOptional(t, e, n) {
			const i = e[n];
			void 0 !== i && this.setValue(t, n, i)
		}
		static upload(t, e, n, i) {
			for (let r = 0, a = e.length; r !== a; ++r) {
				const a = e[r],
					s = n[a.id];
				!1 !== s.needsUpdate && a.setValue(t, s.value, i)
			}
		}
		static seqWithValue(t, e) {
			const n = [];
			for (let i = 0, r = t.length; i !== r; ++i) {
				const r = t[i];
				r.id in e && n.push(r)
			}
			return n
		}
	}

	function pr(t, e, n) {
		const i = t.createShader(e);
		return t.shaderSource(i, n), t.compileShader(i), i
	}
	let fr = 0;

	function mr(t, e, n) {
		const i = t.getShaderParameter(e, t.COMPILE_STATUS),
			r = t.getShaderInfoLog(e)
			.trim();
		if (i && "" === r) return "";
		const a = /ERROR: 0:(\d+)/.exec(r);
		if (a) {
			const i = parseInt(a[1]);
			return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t, e) {
				const n = t.split("\n"),
					i = [],
					r = Math.max(e - 6, 0),
					a = Math.min(e + 6, n.length);
				for (let t = r; t < a; t++) {
					const r = t + 1;
					i.push(`${r===e?">":" "} ${r}: ${n[t]}`)
				}
				return i.join("\n")
			}(t.getShaderSource(e), i)
		}
		return r
	}

	function gr(t, e) {
		const n = function(t) {
			switch (t) {
				case E:
					return ["Linear", "( value )"];
				case w:
					return ["sRGB", "( value )"];
				default:
					return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
			}
		}(e);
		return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
	}

	function _r(t, e) {
		let n;
		switch (e) {
			case 1:
				n = "Linear";
				break;
			case 2:
				n = "Reinhard";
				break;
			case 3:
				n = "OptimizedCineon";
				break;
			case 4:
				n = "ACESFilmic";
				break;
			case 5:
				n = "Custom";
				break;
			default:
				console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
		}
		return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
	}

	function vr(t) {
		return "" !== t
	}

	function xr(t, e) {
		const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
		return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
			.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
			.replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
			.replace(/NUM_SPOT_LIGHT_COORDS/g, n)
			.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
			.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
			.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
			.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
			.replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
			.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
			.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
	}

	function yr(t, e) {
		return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
			.replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
	}
	const br = /^[ \t]*#include +<([\w\d./]+)>/gm;

	function Mr(t) {
		return t.replace(br, Sr)
	}

	function Sr(t, e) {
		const n = _n[e];
		if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
		return Mr(n)
	}
	const Er = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

	function wr(t) {
		return t.replace(Er, Tr)
	}

	function Tr(t, e, n, i) {
		let r = "";
		for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
			.replace(/UNROLLED_LOOP_INDEX/g, t);
		return r
	}

	function Ar(t) {
		let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
		return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
	}

	function Rr(t, e, n, s) {
		const o = t.getContext(),
			l = n.defines;
		let c = n.vertexShader,
			h = n.fragmentShader;
		const u = function(t) {
				let e = "SHADOWMAP_TYPE_BASIC";
				return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
			}(n),
			d = function(t) {
				let e = "ENVMAP_TYPE_CUBE";
				if (t.envMap) switch (t.envMapMode) {
					case i:
					case r:
						e = "ENVMAP_TYPE_CUBE";
						break;
					case a:
						e = "ENVMAP_TYPE_CUBE_UV"
				}
				return e
			}(n),
			p = function(t) {
				let e = "ENVMAP_MODE_REFLECTION";
				return t.envMap && t.envMapMode === r && (e = "ENVMAP_MODE_REFRACTION"), e
			}(n),
			f = function(t) {
				let e = "ENVMAP_BLENDING_NONE";
				if (t.envMap) switch (t.combine) {
					case 0:
						e = "ENVMAP_BLENDING_MULTIPLY";
						break;
					case 1:
						e = "ENVMAP_BLENDING_MIX";
						break;
					case 2:
						e = "ENVMAP_BLENDING_ADD"
				}
				return e
			}(n),
			m = function(t) {
				const e = t.envMapCubeUVHeight;
				if (null === e) return null;
				const n = Math.log2(e) - 2,
					i = 1 / e;
				return {
					texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
					texelHeight: i,
					maxMip: n
				}
			}(n),
			g = n.isWebGL2 ? "" : function(t) {
				return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(vr)
					.join("\n")
			}(n),
			_ = function(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					!1 !== i && e.push("#define " + n + " " + i)
				}
				return e.join("\n")
			}(l),
			v = o.createProgram();
		let x, y, b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
		n.isRawShaderMaterial ? (x = [_].filter(vr)
			.join("\n"), x.length > 0 && (x += "\n"), y = [g, _].filter(vr)
			.join("\n"), y.length > 0 && (y += "\n")) : (x = [Ar(n), "#define SHADER_NAME " + n.shaderName, _, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(vr)
			.join("\n"), y = [g, Ar(n), "#define SHADER_NAME " + n.shaderName, _, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + f : "", m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "", m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "", m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? _n.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? _r("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", _n.encodings_pars_fragment, gr("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(vr)
			.join("\n")), c = Mr(c), c = xr(c, n), c = yr(c, n), h = Mr(h), h = xr(h, n), h = yr(h, n), c = wr(c), h = wr(h), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (b = "#version 300 es\n", x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x, y = ["#define varying in", n.glslVersion === C ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === C ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y);
		const M = b + x + c,
			S = b + y + h,
			E = pr(o, o.VERTEX_SHADER, M),
			w = pr(o, o.FRAGMENT_SHADER, S);
		if (o.attachShader(v, E), o.attachShader(v, w), void 0 !== n.index0AttributeName ? o.bindAttribLocation(v, 0, n.index0AttributeName) : !0 === n.morphTargets && o.bindAttribLocation(v, 0, "position"), o.linkProgram(v), t.debug.checkShaderErrors) {
			const t = o.getProgramInfoLog(v)
				.trim(),
				e = o.getShaderInfoLog(E)
				.trim(),
				n = o.getShaderInfoLog(w)
				.trim();
			let i = !0,
				r = !0;
			if (!1 === o.getProgramParameter(v, o.LINK_STATUS)) {
				i = !1;
				const e = mr(o, E, "vertex"),
					n = mr(o, w, "fragment");
				console.error("THREE.WebGLProgram: Shader Error " + o.getError() + " - VALIDATE_STATUS " + o.getProgramParameter(v, o.VALIDATE_STATUS) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n)
			} else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (r = !1);
			r && (this.diagnostics = {
				runnable: i,
				programLog: t,
				vertexShader: {
					log: e,
					prefix: x
				},
				fragmentShader: {
					log: n,
					prefix: y
				}
			})
		}
		let T, A;
		return o.deleteShader(E), o.deleteShader(w), this.getUniforms = function() {
			return void 0 === T && (T = new dr(o, v)), T
		}, this.getAttributes = function() {
			return void 0 === A && (A = function(t, e) {
				const n = {},
					i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
				for (let r = 0; r < i; r++) {
					const i = t.getActiveAttrib(e, r),
						a = i.name;
					let s = 1;
					i.type === t.FLOAT_MAT2 && (s = 2), i.type === t.FLOAT_MAT3 && (s = 3), i.type === t.FLOAT_MAT4 && (s = 4), n[a] = {
						type: i.type,
						location: t.getAttribLocation(e, a),
						locationSize: s
					}
				}
				return n
			}(o, v)), A
		}, this.destroy = function() {
			s.releaseStatesOfProgram(this), o.deleteProgram(v), this.program = void 0
		}, this.name = n.shaderName, this.id = fr++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = E, this.fragmentShader = w, this
	}
	let Cr = 0;
	class Lr {
		constructor() {
			this.shaderCache = new Map, this.materialCache = new Map
		}
		update(t) {
			const e = t.vertexShader,
				n = t.fragmentShader,
				i = this._getShaderStage(e),
				r = this._getShaderStage(n),
				a = this._getShaderCacheForMaterial(t);
			return !1 === a.has(i) && (a.add(i), i.usedTimes++), !1 === a.has(r) && (a.add(r), r.usedTimes++), this
		}
		remove(t) {
			const e = this.materialCache.get(t);
			for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
			return this.materialCache.delete(t), this
		}
		getVertexShaderID(t) {
			return this._getShaderStage(t.vertexShader)
				.id
		}
		getFragmentShaderID(t) {
			return this._getShaderStage(t.fragmentShader)
				.id
		}
		dispose() {
			this.shaderCache.clear(), this.materialCache.clear()
		}
		_getShaderCacheForMaterial(t) {
			const e = this.materialCache;
			let n = e.get(t);
			return void 0 === n && (n = new Set, e.set(t, n)), n
		}
		_getShaderStage(t) {
			const e = this.shaderCache;
			let n = e.get(t);
			return void 0 === n && (n = new Pr(t), e.set(t, n)), n
		}
	}
	class Pr {
		constructor(t) {
			this.id = Cr++, this.code = t, this.usedTimes = 0
		}
	}

	function Dr(t, e, n, i, r, s, o) {
		const l = new kt,
			c = new Lr,
			h = [],
			u = r.isWebGL2,
			d = r.logarithmicDepthBuffer,
			p = r.vertexTextures;
		let f = r.precision;
		const m = {
			MeshDepthMaterial: "depth",
			MeshDistanceMaterial: "distanceRGBA",
			MeshNormalMaterial: "normal",
			MeshBasicMaterial: "basic",
			MeshLambertMaterial: "lambert",
			MeshPhongMaterial: "phong",
			MeshToonMaterial: "toon",
			MeshStandardMaterial: "physical",
			MeshPhysicalMaterial: "physical",
			MeshMatcapMaterial: "matcap",
			LineBasicMaterial: "basic",
			LineDashedMaterial: "dashed",
			PointsMaterial: "points",
			ShadowMaterial: "shadow",
			SpriteMaterial: "sprite"
		};
		return {
			getParameters: function(s, l, h, g, _) {
				const v = g.fog,
					x = _.geometry,
					y = s.isMeshStandardMaterial ? g.environment : null,
					b = (s.isMeshStandardMaterial ? n : e)
					.get(s.envMap || y),
					M = b && b.mapping === a ? b.image.height : null,
					S = m[s.type];
				null !== s.precision && (f = r.getMaxPrecision(s.precision), f !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", f, "instead."));
				const T = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color,
					A = void 0 !== T ? T.length : 0;
				let R, C, L, P, D = 0;
				if (void 0 !== x.morphAttributes.position && (D = 1), void 0 !== x.morphAttributes.normal && (D = 2), void 0 !== x.morphAttributes.color && (D = 3), S) {
					const t = xn[S];
					R = t.vertexShader, C = t.fragmentShader
				} else R = s.vertexShader, C = s.fragmentShader, c.update(s), L = c.getVertexShaderID(s), P = c.getFragmentShaderID(s);
				const O = t.getRenderTarget(),
					N = s.alphaTest > 0,
					I = s.clearcoat > 0,
					U = s.iridescence > 0;
				return {
					isWebGL2: u,
					shaderID: S,
					shaderName: s.type,
					vertexShader: R,
					fragmentShader: C,
					defines: s.defines,
					customVertexShaderID: L,
					customFragmentShaderID: P,
					isRawShaderMaterial: !0 === s.isRawShaderMaterial,
					glslVersion: s.glslVersion,
					precision: f,
					instancing: !0 === _.isInstancedMesh,
					instancingColor: !0 === _.isInstancedMesh && null !== _.instanceColor,
					supportsVertexTextures: p,
					outputEncoding: null === O ? t.outputEncoding : !0 === O.isXRRenderTarget ? O.texture.encoding : E,
					map: !!s.map,
					matcap: !!s.matcap,
					envMap: !!b,
					envMapMode: b && b.mapping,
					envMapCubeUVHeight: M,
					lightMap: !!s.lightMap,
					aoMap: !!s.aoMap,
					emissiveMap: !!s.emissiveMap,
					bumpMap: !!s.bumpMap,
					normalMap: !!s.normalMap,
					objectSpaceNormalMap: 1 === s.normalMapType,
					tangentSpaceNormalMap: 0 === s.normalMapType,
					decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === w,
					clearcoat: I,
					clearcoatMap: I && !!s.clearcoatMap,
					clearcoatRoughnessMap: I && !!s.clearcoatRoughnessMap,
					clearcoatNormalMap: I && !!s.clearcoatNormalMap,
					iridescence: U,
					iridescenceMap: U && !!s.iridescenceMap,
					iridescenceThicknessMap: U && !!s.iridescenceThicknessMap,
					displacementMap: !!s.displacementMap,
					roughnessMap: !!s.roughnessMap,
					metalnessMap: !!s.metalnessMap,
					specularMap: !!s.specularMap,
					specularIntensityMap: !!s.specularIntensityMap,
					specularColorMap: !!s.specularColorMap,
					opaque: !1 === s.transparent && 1 === s.blending,
					alphaMap: !!s.alphaMap,
					alphaTest: N,
					gradientMap: !!s.gradientMap,
					sheen: s.sheen > 0,
					sheenColorMap: !!s.sheenColorMap,
					sheenRoughnessMap: !!s.sheenRoughnessMap,
					transmission: s.transmission > 0,
					transmissionMap: !!s.transmissionMap,
					thicknessMap: !!s.thicknessMap,
					combine: s.combine,
					vertexTangents: !!s.normalMap && !!x.attributes.tangent,
					vertexColors: s.vertexColors,
					vertexAlphas: !0 === s.vertexColors && !!x.attributes.color && 4 === x.attributes.color.itemSize,
					vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
					uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
					fog: !!v,
					useFog: !0 === s.fog,
					fogExp2: v && v.isFogExp2,
					flatShading: !!s.flatShading,
					sizeAttenuation: s.sizeAttenuation,
					logarithmicDepthBuffer: d,
					skinning: !0 === _.isSkinnedMesh,
					morphTargets: void 0 !== x.morphAttributes.position,
					morphNormals: void 0 !== x.morphAttributes.normal,
					morphColors: void 0 !== x.morphAttributes.color,
					morphTargetsCount: A,
					morphTextureStride: D,
					numDirLights: l.directional.length,
					numPointLights: l.point.length,
					numSpotLights: l.spot.length,
					numSpotLightMaps: l.spotLightMap.length,
					numRectAreaLights: l.rectArea.length,
					numHemiLights: l.hemi.length,
					numDirLightShadows: l.directionalShadowMap.length,
					numPointLightShadows: l.pointShadowMap.length,
					numSpotLightShadows: l.spotShadowMap.length,
					numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
					numClippingPlanes: o.numPlanes,
					numClipIntersection: o.numIntersection,
					dithering: s.dithering,
					shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
					shadowMapType: t.shadowMap.type,
					toneMapping: s.toneMapped ? t.toneMapping : 0,
					physicallyCorrectLights: t.physicallyCorrectLights,
					premultipliedAlpha: s.premultipliedAlpha,
					doubleSided: 2 === s.side,
					flipSided: 1 === s.side,
					useDepthPacking: !!s.depthPacking,
					depthPacking: s.depthPacking || 0,
					index0AttributeName: s.index0AttributeName,
					extensionDerivatives: s.extensions && s.extensions.derivatives,
					extensionFragDepth: s.extensions && s.extensions.fragDepth,
					extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
					extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
					rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
					rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
					rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
					customProgramCacheKey: s.customProgramCacheKey()
				}
			},
			getProgramCacheKey: function(e) {
				const n = [];
				if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines)
					for (const t in e.defines) n.push(t), n.push(e.defines[t]);
				return !1 === e.isRawShaderMaterial && (function(t, e) {
					t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
				}(n, e), function(t, e) {
					l.disableAll(), e.isWebGL2 && l.enable(0), e.supportsVertexTextures && l.enable(1), e.instancing && l.enable(2), e.instancingColor && l.enable(3), e.map && l.enable(4), e.matcap && l.enable(5), e.envMap && l.enable(6), e.lightMap && l.enable(7), e.aoMap && l.enable(8), e.emissiveMap && l.enable(9), e.bumpMap && l.enable(10), e.normalMap && l.enable(11), e.objectSpaceNormalMap && l.enable(12), e.tangentSpaceNormalMap && l.enable(13), e.clearcoat && l.enable(14), e.clearcoatMap && l.enable(15), e.clearcoatRoughnessMap && l.enable(16), e.clearcoatNormalMap && l.enable(17), e.iridescence && l.enable(18), e.iridescenceMap && l.enable(19), e.iridescenceThicknessMap && l.enable(20), e.displacementMap && l.enable(21), e.specularMap && l.enable(22), e.roughnessMap && l.enable(23), e.metalnessMap && l.enable(24), e.gradientMap && l.enable(25), e.alphaMap && l.enable(26), e.alphaTest && l.enable(27), e.vertexColors && l.enable(28), e.vertexAlphas && l.enable(29), e.vertexUvs && l.enable(30), e.vertexTangents && l.enable(31), e.uvsVertexOnly && l.enable(32), t.push(l.mask), l.disableAll(), e.fog && l.enable(0), e.useFog && l.enable(1), e.flatShading && l.enable(2), e.logarithmicDepthBuffer && l.enable(3), e.skinning && l.enable(4), e.morphTargets && l.enable(5), e.morphNormals && l.enable(6), e.morphColors && l.enable(7), e.premultipliedAlpha && l.enable(8), e.shadowMapEnabled && l.enable(9), e.physicallyCorrectLights && l.enable(10), e.doubleSided && l.enable(11), e.flipSided && l.enable(12), e.useDepthPacking && l.enable(13), e.dithering && l.enable(14), e.specularIntensityMap && l.enable(15), e.specularColorMap && l.enable(16), e.transmission && l.enable(17), e.transmissionMap && l.enable(18), e.thicknessMap && l.enable(19), e.sheen && l.enable(20), e.sheenColorMap && l.enable(21), e.sheenRoughnessMap && l.enable(22), e.decodeVideoTexture && l.enable(23), e.opaque && l.enable(24), t.push(l.mask)
				}(n, e), n.push(t.outputEncoding)), n.push(e.customProgramCacheKey), n.join()
			},
			getUniforms: function(t) {
				const e = m[t.type];
				let n;
				if (e) {
					const t = xn[e];
					n = ve.clone(t.uniforms)
				} else n = t.uniforms;
				return n
			},
			acquireProgram: function(e, n) {
				let i;
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					if (e.cacheKey === n) {
						i = e, ++i.usedTimes;
						break
					}
				}
				return void 0 === i && (i = new Rr(t, n, e, s), h.push(i)), i
			},
			releaseProgram: function(t) {
				if (0 == --t.usedTimes) {
					const e = h.indexOf(t);
					h[e] = h[h.length - 1], h.pop(), t.destroy()
				}
			},
			releaseShaderCache: function(t) {
				c.remove(t)
			},
			programs: h,
			dispose: function() {
				c.dispose()
			}
		}
	}

	function Or() {
		let t = new WeakMap;
		return {
			get: function(e) {
				let n = t.get(e);
				return void 0 === n && (n = {}, t.set(e, n)), n
			},
			remove: function(e) {
				t.delete(e)
			},
			update: function(e, n, i) {
				t.get(e)[n] = i
			},
			dispose: function() {
				t = new WeakMap
			}
		}
	}

	function Nr(t, e) {
		return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
	}

	function Ir(t, e) {
		return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
	}

	function Ur() {
		const t = [];
		let e = 0;
		const n = [],
			i = [],
			r = [];

		function a(n, i, r, a, s, o) {
			let l = t[e];
			return void 0 === l ? (l = {
				id: n.id,
				object: n,
				geometry: i,
				material: r,
				groupOrder: a,
				renderOrder: n.renderOrder,
				z: s,
				group: o
			}, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = o), e++, l
		}
		return {
			opaque: n,
			transmissive: i,
			transparent: r,
			init: function() {
				e = 0, n.length = 0, i.length = 0, r.length = 0
			},
			push: function(t, e, s, o, l, c) {
				const h = a(t, e, s, o, l, c);
				s.transmission > 0 ? i.push(h) : !0 === s.transparent ? r.push(h) : n.push(h)
			},
			unshift: function(t, e, s, o, l, c) {
				const h = a(t, e, s, o, l, c);
				s.transmission > 0 ? i.unshift(h) : !0 === s.transparent ? r.unshift(h) : n.unshift(h)
			},
			finish: function() {
				for (let n = e, i = t.length; n < i; n++) {
					const e = t[n];
					if (null === e.id) break;
					e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
				}
			},
			sort: function(t, e) {
				n.length > 1 && n.sort(t || Nr), i.length > 1 && i.sort(e || Ir), r.length > 1 && r.sort(e || Ir)
			}
		}
	}

	function Fr() {
		let t = new WeakMap;
		return {
			get: function(e, n) {
				const i = t.get(e);
				let r;
				return void 0 === i ? (r = new Ur, t.set(e, [r])) : n >= i.length ? (r = new Ur, i.push(r)) : r = i[n], r
			},
			dispose: function() {
				t = new WeakMap
			}
		}
	}

	function zr() {
		const t = {};
		return {
			get: function(e) {
				if (void 0 !== t[e.id]) return t[e.id];
				let n;
				switch (e.type) {
					case "DirectionalLight":
						n = {
							direction: new G,
							color: new Le
						};
						break;
					case "SpotLight":
						n = {
							position: new G,
							direction: new G,
							color: new Le,
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0
						};
						break;
					case "PointLight":
						n = {
							position: new G,
							color: new Le,
							distance: 0,
							decay: 0
						};
						break;
					case "HemisphereLight":
						n = {
							direction: new G,
							skyColor: new Le,
							groundColor: new Le
						};
						break;
					case "RectAreaLight":
						n = {
							color: new Le,
							position: new G,
							halfWidth: new G,
							halfHeight: new G
						}
				}
				return t[e.id] = n, n
			}
		}
	}
	let Br = 0;

	function Hr(t, e) {
		return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0)
	}

	function kr(t, e) {
		const n = new zr,
			i = function() {
				const t = {};
				return {
					get: function(e) {
						if (void 0 !== t[e.id]) return t[e.id];
						let n;
						switch (e.type) {
							case "DirectionalLight":
							case "SpotLight":
								n = {
									shadowBias: 0,
									shadowNormalBias: 0,
									shadowRadius: 1,
									shadowMapSize: new At
								};
								break;
							case "PointLight":
								n = {
									shadowBias: 0,
									shadowNormalBias: 0,
									shadowRadius: 1,
									shadowMapSize: new At,
									shadowCameraNear: 1,
									shadowCameraFar: 1e3
								}
						}
						return t[e.id] = n, n
					}
				}
			}(),
			r = {
				version: 0,
				hash: {
					directionalLength: -1,
					pointLength: -1,
					spotLength: -1,
					rectAreaLength: -1,
					hemiLength: -1,
					numDirectionalShadows: -1,
					numPointShadows: -1,
					numSpotShadows: -1,
					numSpotMaps: -1
				},
				ambient: [0, 0, 0],
				probe: [],
				directional: [],
				directionalShadow: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotLightMap: [],
				spotShadow: [],
				spotShadowMap: [],
				spotLightMatrix: [],
				rectArea: [],
				rectAreaLTC1: null,
				rectAreaLTC2: null,
				point: [],
				pointShadow: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: [],
				numSpotLightShadowsWithMaps: 0
			};
		for (let t = 0; t < 9; t++) r.probe.push(new G);
		const a = new G,
			s = new xt,
			o = new xt;
		return {
			setup: function(a, s) {
				let o = 0,
					l = 0,
					c = 0;
				for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
				let h = 0,
					u = 0,
					d = 0,
					p = 0,
					f = 0,
					m = 0,
					g = 0,
					_ = 0,
					v = 0,
					x = 0;
				a.sort(Hr);
				const y = !0 !== s ? Math.PI : 1;
				for (let t = 0, e = a.length; t < e; t++) {
					const e = a[t],
						s = e.color,
						b = e.intensity,
						M = e.distance,
						S = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
					if (e.isAmbientLight) o += s.r * b * y, l += s.g * b * y, c += s.b * b * y;
					else if (e.isLightProbe)
						for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], b);
					else if (e.isDirectionalLight) {
						const t = n.get(e);
						if (t.color.copy(e.color)
							.multiplyScalar(e.intensity * y), e.castShadow) {
							const t = e.shadow,
								n = i.get(e);
							n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = S, r.directionalShadowMatrix[h] = e.shadow.matrix, m++
						}
						r.directional[h] = t, h++
					} else if (e.isSpotLight) {
						const t = n.get(e);
						t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(s)
							.multiplyScalar(b * y), t.distance = M, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, r.spot[d] = t;
						const a = e.shadow;
						if (e.map && (r.spotLightMap[v] = e.map, v++, a.updateMatrices(e), e.castShadow && x++), r.spotLightMatrix[d] = a.matrix, e.castShadow) {
							const t = i.get(e);
							t.shadowBias = a.bias, t.shadowNormalBias = a.normalBias, t.shadowRadius = a.radius, t.shadowMapSize = a.mapSize, r.spotShadow[d] = t, r.spotShadowMap[d] = S, _++
						}
						d++
					} else if (e.isRectAreaLight) {
						const t = n.get(e);
						t.color.copy(s)
							.multiplyScalar(b), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++
					} else if (e.isPointLight) {
						const t = n.get(e);
						if (t.color.copy(e.color)
							.multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
							const t = e.shadow,
								n = i.get(e);
							n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = S, r.pointShadowMatrix[u] = e.shadow.matrix, g++
						}
						r.point[u] = t, u++
					} else if (e.isHemisphereLight) {
						const t = n.get(e);
						t.skyColor.copy(e.color)
							.multiplyScalar(b * y), t.groundColor.copy(e.groundColor)
							.multiplyScalar(b * y), r.hemi[f] = t, f++
					}
				}
				p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = vn.LTC_FLOAT_1, r.rectAreaLTC2 = vn.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = vn.LTC_HALF_1, r.rectAreaLTC2 = vn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
				const b = r.hash;
				b.directionalLength === h && b.pointLength === u && b.spotLength === d && b.rectAreaLength === p && b.hemiLength === f && b.numDirectionalShadows === m && b.numPointShadows === g && b.numSpotShadows === _ && b.numSpotMaps === v || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = f, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, b.directionalLength = h, b.pointLength = u, b.spotLength = d, b.rectAreaLength = p, b.hemiLength = f, b.numDirectionalShadows = m, b.numPointShadows = g, b.numSpotShadows = _, b.numSpotMaps = v, r.version = Br++)
			},
			setupView: function(t, e) {
				let n = 0,
					i = 0,
					l = 0,
					c = 0,
					h = 0;
				const u = e.matrixWorldInverse;
				for (let e = 0, d = t.length; e < d; e++) {
					const d = t[e];
					if (d.isDirectionalLight) {
						const t = r.directional[n];
						t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(u), n++
					} else if (d.isSpotLight) {
						const t = r.spot[l];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(u), l++
					} else if (d.isRectAreaLight) {
						const t = r.rectArea[c];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), s.copy(d.matrixWorld), s.premultiply(u), o.extractRotation(s), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
					} else if (d.isPointLight) {
						const t = r.point[i];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++
					} else if (d.isHemisphereLight) {
						const t = r.hemi[h];
						t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), h++
					}
				}
			},
			state: r
		}
	}

	function Gr(t, e) {
		const n = new kr(t, e),
			i = [],
			r = [];
		return {
			init: function() {
				i.length = 0, r.length = 0
			},
			state: {
				lightsArray: i,
				shadowsArray: r,
				lights: n
			},
			setupLights: function(t) {
				n.setup(i, t)
			},
			setupLightsView: function(t) {
				n.setupView(i, t)
			},
			pushLight: function(t) {
				i.push(t)
			},
			pushShadow: function(t) {
				r.push(t)
			}
		}
	}

	function Vr(t, e) {
		let n = new WeakMap;
		return {
			get: function(i, r = 0) {
				const a = n.get(i);
				let s;
				return void 0 === a ? (s = new Gr(t, e), n.set(i, [s])) : r >= a.length ? (s = new Gr(t, e), a.push(s)) : s = a[r], s
			},
			dispose: function() {
				n = new WeakMap
			}
		}
	}
	class Wr extends me {
		constructor(t) {
			super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
		}
		copy(t) {
			return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
		}
	}
	class Xr extends me {
		constructor(t) {
			super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new G, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
		}
		copy(t) {
			return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
		}
	}

	function jr(t, e, n) {
		let i = new vt;
		const r = new At,
			a = new At,
			s = new Rt,
			o = new Wr({
				depthPacking: 3201
			}),
			l = new Xr,
			h = {},
			u = n.maxTextureSize,
			d = {
				0: 1,
				1: 0,
				2: 2
			},
			p = new xe({
				defines: {
					VSM_SAMPLES: 8
				},
				uniforms: {
					shadow_pass: {
						value: null
					},
					resolution: {
						value: new At
					},
					radius: {
						value: 4
					}
				},
				vertexShader: "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n",
				fragmentShader: "\nuniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n\n#include <packing>\n\nvoid main() {\n\n\tconst float samples = float( VSM_SAMPLES );\n\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\n\t\t#ifdef HORIZONTAL_PASS\n\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\n\t\t#else\n\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\n\t\t#endif\n\n\t}\n\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n\n}\n"
			}),
			f = p.clone();
		f.defines.HORIZONTAL_PASS = 1;
		const m = new ue;
		m.setAttribute("position", new Nt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
		const g = new mn(m, p),
			_ = this;

		function v(n, i) {
			const a = e.update(g);
			p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, f.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, f.needsUpdate = !0), null === n.mapPass && (n.mapPass = new Pn(r.x, r.y)), p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, a, p, g, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, a, f, g, null)
		}

		function x(e, n, i, r, a, s) {
			let c = null;
			const u = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
			if (c = void 0 !== u ? u : !0 === i.isPointLight ? l : o, t.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) {
				const t = c.uuid,
					e = n.uuid;
				let i = h[t];
				void 0 === i && (i = {}, h[t] = i);
				let r = i[e];
				void 0 === r && (r = c.clone(), i[e] = r), c = r
			}
			return c.visible = n.visible, c.wireframe = n.wireframe, c.side = 3 === s ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : d[n.side], c.alphaMap = n.alphaMap, c.alphaTest = n.alphaTest, c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.displacementMap = n.displacementMap, c.displacementScale = n.displacementScale, c.displacementBias = n.displacementBias, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, !0 === i.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(i.matrixWorld), c.nearDistance = r, c.farDistance = a), c
		}

		function y(n, r, a, s, o) {
			if (!1 === n.visible) return;
			if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
				n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
				const i = e.update(n),
					r = n.material;
				if (Array.isArray(r)) {
					const e = i.groups;
					for (let l = 0, c = e.length; l < c; l++) {
						const c = e[l],
							h = r[c.materialIndex];
						if (h && h.visible) {
							const e = x(n, h, s, a.near, a.far, o);
							t.renderBufferDirect(a, null, i, e, n, c)
						}
					}
				} else if (r.visible) {
					const e = x(n, r, s, a.near, a.far, o);
					t.renderBufferDirect(a, null, i, e, n, null)
				}
			}
			const l = n.children;
			for (let t = 0, e = l.length; t < e; t++) y(l[t], r, a, s, o)
		}
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, o) {
			if (!1 === _.enabled) return;
			if (!1 === _.autoUpdate && !1 === _.needsUpdate) return;
			if (0 === e.length) return;
			const l = t.getRenderTarget(),
				h = t.getActiveCubeFace(),
				d = t.getActiveMipmapLevel(),
				p = t.state;
			p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
			for (let l = 0, h = e.length; l < h; l++) {
				const h = e[l],
					d = h.shadow;
				if (void 0 === d) {
					console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
					continue
				}
				if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
				r.copy(d.mapSize);
				const f = d.getFrameExtents();
				if (r.multiply(f), a.copy(d.mapSize), (r.x > u || r.y > u) && (r.x > u && (a.x = Math.floor(u / f.x), r.x = a.x * f.x, d.mapSize.x = a.x), r.y > u && (a.y = Math.floor(u / f.y), r.y = a.y * f.y, d.mapSize.y = a.y)), null === d.map) {
					const t = 3 !== this.type ? {
						minFilter: c,
						magFilter: c
					} : {};
					d.map = new Pn(r.x, r.y, t), d.map.texture.name = h.name + ".shadowMap", d.camera.updateProjectionMatrix()
				}
				t.setRenderTarget(d.map), t.clear();
				const m = d.getViewportCount();
				for (let t = 0; t < m; t++) {
					const e = d.getViewport(t);
					s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w), p.viewport(s), d.updateMatrices(h, t), i = d.getFrustum(), y(n, o, d.camera, h, this.type)
				}!0 !== d.isPointLightShadow && 3 === this.type && v(d, o), d.needsUpdate = !1
			}
			_.needsUpdate = !1, t.setRenderTarget(l, h, d)
		}
	}

	function qr(t, e, i) {
		const r = i.isWebGL2,
			a = new function() {
				let e = !1;
				const n = new Rt;
				let i = null;
				const r = new Rt(0, 0, 0, 0);
				return {
					setMask: function(n) {
						i === n || e || (t.colorMask(n, n, n, n), i = n)
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e, i, a, s, o) {
						!0 === o && (e *= s, i *= s, a *= s), n.set(e, i, a, s), !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n))
					},
					reset: function() {
						e = !1, i = null, r.set(-1, 0, 0, 0)
					}
				}
			},
			s = new function() {
				let e = !1,
					n = null,
					i = null,
					r = null;
				return {
					setTest: function(e) {
						e ? k(t.DEPTH_TEST) : G(t.DEPTH_TEST)
					},
					setMask: function(i) {
						n === i || e || (t.depthMask(i), n = i)
					},
					setFunc: function(e) {
						if (i !== e) {
							switch (e) {
								case 0:
									t.depthFunc(t.NEVER);
									break;
								case 1:
									t.depthFunc(t.ALWAYS);
									break;
								case 2:
									t.depthFunc(t.LESS);
									break;
								case 3:
								default:
									t.depthFunc(t.LEQUAL);
									break;
								case 4:
									t.depthFunc(t.EQUAL);
									break;
								case 5:
									t.depthFunc(t.GEQUAL);
									break;
								case 6:
									t.depthFunc(t.GREATER);
									break;
								case 7:
									t.depthFunc(t.NOTEQUAL)
							}
							i = e
						}
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e) {
						r !== e && (t.clearDepth(e), r = e)
					},
					reset: function() {
						e = !1, n = null, i = null, r = null
					}
				}
			},
			o = new function() {
				let e = !1,
					n = null,
					i = null,
					r = null,
					a = null,
					s = null,
					o = null,
					l = null,
					c = null;
				return {
					setTest: function(n) {
						e || (n ? k(t.STENCIL_TEST) : G(t.STENCIL_TEST))
					},
					setMask: function(i) {
						n === i || e || (t.stencilMask(i), n = i)
					},
					setFunc: function(e, n, s) {
						i === e && r === n && a === s || (t.stencilFunc(e, n, s), i = e, r = n, a = s)
					},
					setOp: function(e, n, i) {
						s === e && o === n && l === i || (t.stencilOp(e, n, i), s = e, o = n, l = i)
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e) {
						c !== e && (t.clearStencil(e), c = e)
					},
					reset: function() {
						e = !1, n = null, i = null, r = null, a = null, s = null, o = null, l = null, c = null
					}
				}
			},
			l = new WeakMap,
			c = new WeakMap;
		let h = {},
			u = {},
			d = new WeakMap,
			p = [],
			f = null,
			m = !1,
			g = null,
			_ = null,
			v = null,
			x = null,
			y = null,
			b = null,
			M = null,
			S = !1,
			E = null,
			w = null,
			T = null,
			A = null,
			R = null;
		const C = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
		let L = !1,
			P = 0;
		const D = t.getParameter(t.VERSION); - 1 !== D.indexOf("WebGL") ? (P = parseFloat(/^WebGL (\d)/.exec(D)[1]), L = P >= 1) : -1 !== D.indexOf("OpenGL ES") && (P = parseFloat(/^OpenGL ES (\d)/.exec(D)[1]), L = P >= 2);
		let O = null,
			N = {};
		const I = t.getParameter(t.SCISSOR_BOX),
			U = t.getParameter(t.VIEWPORT),
			F = (new Rt)
			.fromArray(I),
			z = (new Rt)
			.fromArray(U);

		function B(e, n, i) {
			const r = new Uint8Array(4),
				a = t.createTexture();
			t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
			for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
			return a
		}
		const H = {};

		function k(e) {
			!0 !== h[e] && (t.enable(e), h[e] = !0)
		}

		function G(e) {
			!1 !== h[e] && (t.disable(e), h[e] = !1)
		}
		H[t.TEXTURE_2D] = B(t.TEXTURE_2D, t.TEXTURE_2D, 1), H[t.TEXTURE_CUBE_MAP] = B(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), a.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), k(t.DEPTH_TEST), s.setFunc(3), j(!1), q(1), k(t.CULL_FACE), X(0);
		const V = {
			[n]: t.FUNC_ADD,
			101: t.FUNC_SUBTRACT,
			102: t.FUNC_REVERSE_SUBTRACT
		};
		if (r) V[103] = t.MIN, V[104] = t.MAX;
		else {
			const t = e.get("EXT_blend_minmax");
			null !== t && (V[103] = t.MIN_EXT, V[104] = t.MAX_EXT)
		}
		const W = {
			200: t.ZERO,
			201: t.ONE,
			202: t.SRC_COLOR,
			204: t.SRC_ALPHA,
			210: t.SRC_ALPHA_SATURATE,
			208: t.DST_COLOR,
			206: t.DST_ALPHA,
			203: t.ONE_MINUS_SRC_COLOR,
			205: t.ONE_MINUS_SRC_ALPHA,
			209: t.ONE_MINUS_DST_COLOR,
			207: t.ONE_MINUS_DST_ALPHA
		};

		function X(e, i, r, a, s, o, l, c) {
			if (0 !== e) {
				if (!1 === m && (k(t.BLEND), m = !0), 5 === e) s = s || i, o = o || r, l = l || a, i === _ && s === y || (t.blendEquationSeparate(V[i], V[s]), _ = i, y = s), r === v && a === x && o === b && l === M || (t.blendFuncSeparate(W[r], W[a], W[o], W[l]), v = r, x = a, b = o, M = l), g = e, S = null;
				else if (e !== g || c !== S) {
					if (_ === n && y === n || (t.blendEquation(t.FUNC_ADD), _ = n, y = n), c) switch (e) {
						case 1:
							t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
							break;
						case 2:
							t.blendFunc(t.ONE, t.ONE);
							break;
						case 3:
							t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
							break;
						case 4:
							t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
							break;
						default:
							console.error("THREE.WebGLState: Invalid blending: ", e)
					} else switch (e) {
						case 1:
							t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
							break;
						case 2:
							t.blendFunc(t.SRC_ALPHA, t.ONE);
							break;
						case 3:
							t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
							break;
						case 4:
							t.blendFunc(t.ZERO, t.SRC_COLOR);
							break;
						default:
							console.error("THREE.WebGLState: Invalid blending: ", e)
					}
					v = null, x = null, b = null, M = null, g = e, S = c
				}
			} else !0 === m && (G(t.BLEND), m = !1)
		}

		function j(e) {
			E !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), E = e)
		}

		function q(e) {
			0 !== e ? (k(t.CULL_FACE), e !== w && (1 === e ? t.cullFace(t.BACK) : 2 === e ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : G(t.CULL_FACE), w = e
		}

		function Y(e, n, i) {
			e ? (k(t.POLYGON_OFFSET_FILL), A === n && R === i || (t.polygonOffset(n, i), A = n, R = i)) : G(t.POLYGON_OFFSET_FILL)
		}
		return {
			buffers: {
				color: a,
				depth: s,
				stencil: o
			},
			enable: k,
			disable: G,
			bindFramebuffer: function(e, n) {
				return u[e] !== n && (t.bindFramebuffer(e, n), u[e] = n, r && (e === t.DRAW_FRAMEBUFFER && (u[t.FRAMEBUFFER] = n), e === t.FRAMEBUFFER && (u[t.DRAW_FRAMEBUFFER] = n)), !0)
			},
			drawBuffers: function(n, r) {
				let a = p,
					s = !1;
				if (n)
					if (a = d.get(r), void 0 === a && (a = [], d.set(r, a)), n.isWebGLMultipleRenderTargets) {
						const e = n.texture;
						if (a.length !== e.length || a[0] !== t.COLOR_ATTACHMENT0) {
							for (let n = 0, i = e.length; n < i; n++) a[n] = t.COLOR_ATTACHMENT0 + n;
							a.length = e.length, s = !0
						}
					} else a[0] !== t.COLOR_ATTACHMENT0 && (a[0] = t.COLOR_ATTACHMENT0, s = !0);
				else a[0] !== t.BACK && (a[0] = t.BACK, s = !0);
				s && (i.isWebGL2 ? t.drawBuffers(a) : e.get("WEBGL_draw_buffers")
					.drawBuffersWEBGL(a))
			},
			useProgram: function(e) {
				return f !== e && (t.useProgram(e), f = e, !0)
			},
			setBlending: X,
			setMaterial: function(e, n) {
				2 === e.side ? G(t.CULL_FACE) : k(t.CULL_FACE);
				let i = 1 === e.side;
				n && (i = !i), j(i), 1 === e.blending && !1 === e.transparent ? X(0) : X(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), s.setFunc(e.depthFunc), s.setTest(e.depthTest), s.setMask(e.depthWrite), a.setMask(e.colorWrite);
				const r = e.stencilWrite;
				o.setTest(r), r && (o.setMask(e.stencilWriteMask), o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), Y(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? k(t.SAMPLE_ALPHA_TO_COVERAGE) : G(t.SAMPLE_ALPHA_TO_COVERAGE)
			},
			setFlipSided: j,
			setCullFace: q,
			setLineWidth: function(e) {
				e !== T && (L && t.lineWidth(e), T = e)
			},
			setPolygonOffset: Y,
			setScissorTest: function(e) {
				e ? k(t.SCISSOR_TEST) : G(t.SCISSOR_TEST)
			},
			activeTexture: function(e) {
				void 0 === e && (e = t.TEXTURE0 + C - 1), O !== e && (t.activeTexture(e), O = e)
			},
			bindTexture: function(e, n, i) {
				void 0 === i && (i = null === O ? t.TEXTURE0 + C - 1 : O);
				let r = N[i];
				void 0 === r && (r = {
					type: void 0,
					texture: void 0
				}, N[i] = r), r.type === e && r.texture === n || (O !== i && (t.activeTexture(i), O = i), t.bindTexture(e, n || H[e]), r.type = e, r.texture = n)
			},
			unbindTexture: function() {
				const e = N[O];
				void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
			},
			compressedTexImage2D: function() {
				try {
					t.compressedTexImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texImage2D: function() {
				try {
					t.texImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texImage3D: function() {
				try {
					t.texImage3D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			updateUBOMapping: function(e, n) {
				let i = c.get(n);
				void 0 === i && (i = new WeakMap, c.set(n, i));
				let r = i.get(e);
				void 0 === r && (r = t.getUniformBlockIndex(n, e.name), i.set(e, r))
			},
			uniformBlockBinding: function(e, n) {
				const i = c.get(n)
					.get(e);
				l.get(e) !== i && (t.uniformBlockBinding(n, i, e.__bindingPointIndex), l.set(e, i))
			},
			texStorage2D: function() {
				try {
					t.texStorage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texStorage3D: function() {
				try {
					t.texStorage3D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texSubImage2D: function() {
				try {
					t.texSubImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texSubImage3D: function() {
				try {
					t.texSubImage3D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			compressedTexSubImage2D: function() {
				try {
					t.compressedTexSubImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			scissor: function(e) {
				!1 === F.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), F.copy(e))
			},
			viewport: function(e) {
				!1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e))
			},
			reset: function() {
				t.disable(t.BLEND), t.disable(t.CULL_FACE), t.disable(t.DEPTH_TEST), t.disable(t.POLYGON_OFFSET_FILL), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.SAMPLE_ALPHA_TO_COVERAGE), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ONE, t.ZERO), t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(t.LESS), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(t.ALWAYS, 0, 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP), t.clearStencil(0), t.cullFace(t.BACK), t.frontFace(t.CCW), t.polygonOffset(0, 0), t.activeTexture(t.TEXTURE0), t.bindFramebuffer(t.FRAMEBUFFER, null), !0 === r && (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.bindFramebuffer(t.READ_FRAMEBUFFER, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), h = {}, O = null, N = {}, u = {}, d = new WeakMap, p = [], f = null, m = !1, g = null, _ = null, v = null, x = null, y = null, b = null, M = null, S = !1, E = null, w = null, T = null, A = null, R = null, F.set(0, 0, t.canvas.width, t.canvas.height), z.set(0, 0, t.canvas.width, t.canvas.height), a.reset(), s.reset(), o.reset()
			}
		}
	}

	function Yr(t, e, n, i, r, a, y) {
		const b = r.isWebGL2,
			M = r.maxTextures,
			S = r.maxCubemapSize,
			T = r.maxTextureSize,
			A = r.maxSamples,
			R = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
			C = /OculusBrowser/g.test(navigator.userAgent),
			P = new WeakMap;
		let D;
		const O = new WeakMap;
		let N = !1;
		try {
			N = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1)
				.getContext("2d")
		} catch (t) {}

		function I(t, e) {
			return N ? new OffscreenCanvas(t, e) : ie("canvas")
		}

		function U(t, e, n, i) {
			let r = 1;
			if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
				if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
					const i = e ? z : Math.floor,
						a = i(r * t.width),
						s = i(r * t.height);
					void 0 === D && (D = I(a, s));
					const o = n ? I(a, s) : D;
					return o.width = a, o.height = s, o.getContext("2d")
						.drawImage(t, 0, 0, a, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + s + ")."), o
				}
				return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
			}
			return t
		}

		function B(t) {
			return F(t.width) && F(t.height)
		}

		function H(t, e) {
			return t.generateMipmaps && e && t.minFilter !== c && t.minFilter !== h
		}

		function k(e) {
			t.generateMipmap(e)
		}

		function G(n, i, r, a, s = !1) {
			if (!1 === b) return i;
			if (null !== n) {
				if (void 0 !== t[n]) return t[n];
				console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
			}
			let o = i;
			return i === t.RED && (r === t.FLOAT && (o = t.R32F), r === t.HALF_FLOAT && (o = t.R16F), r === t.UNSIGNED_BYTE && (o = t.R8)), i === t.RG && (r === t.FLOAT && (o = t.RG32F), r === t.HALF_FLOAT && (o = t.RG16F), r === t.UNSIGNED_BYTE && (o = t.RG8)), i === t.RGBA && (r === t.FLOAT && (o = t.RGBA32F), r === t.HALF_FLOAT && (o = t.RGBA16F), r === t.UNSIGNED_BYTE && (o = a === w && !1 === s ? t.SRGB8_ALPHA8 : t.RGBA8), r === t.UNSIGNED_SHORT_4_4_4_4 && (o = t.RGBA4), r === t.UNSIGNED_SHORT_5_5_5_1 && (o = t.RGB5_A1)), o !== t.R16F && o !== t.R32F && o !== t.RG16F && o !== t.RG32F && o !== t.RGBA16F && o !== t.RGBA32F || e.get("EXT_color_buffer_float"), o
		}

		function V(t, e, n) {
			return !0 === H(t, n) || t.isFramebufferTexture && t.minFilter !== c && t.minFilter !== h ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
		}

		function W(e) {
			return e === c || 1004 === e || 1005 === e ? t.NEAREST : t.LINEAR
		}

		function X(t) {
			const e = t.target;
			e.removeEventListener("dispose", X),
				function(t) {
					const e = i.get(t);
					if (void 0 === e.__webglInit) return;
					const n = t.source,
						r = O.get(n);
					if (r) {
						const i = r[e.__cacheKey];
						i.usedTimes--, 0 === i.usedTimes && q(t), 0 === Object.keys(r)
							.length && O.delete(n)
					}
					i.remove(t)
				}(e), e.isVideoTexture && P.delete(e)
		}

		function j(e) {
			const n = e.target;
			n.removeEventListener("dispose", j),
				function(e) {
					const n = e.texture,
						r = i.get(e),
						a = i.get(n);
					if (void 0 !== a.__webglTexture && (t.deleteTexture(a.__webglTexture), y.memory.textures--), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget)
						for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
					else {
						if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
							for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
						r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
					}
					if (e.isWebGLMultipleRenderTargets)
						for (let e = 0, r = n.length; e < r; e++) {
							const r = i.get(n[e]);
							r.__webglTexture && (t.deleteTexture(r.__webglTexture), y.memory.textures--), i.remove(n[e])
						}
					i.remove(n), i.remove(e)
				}(n)
		}

		function q(e) {
			const n = i.get(e);
			t.deleteTexture(n.__webglTexture);
			const r = e.source;
			delete O.get(r)[n.__cacheKey], y.memory.textures--
		}
		let Y = 0;

		function Z(e, r) {
			const a = i.get(e);
			if (e.isVideoTexture && function(t) {
				const e = y.render.frame;
				P.get(t) !== e && (P.set(t, e), t.update())
			}(e), !1 === e.isRenderTargetTexture && e.version > 0 && a.__version !== e.version) {
				const t = e.image;
				if (null === t) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
				else {
					if (!1 !== t.complete) return void tt(a, e, r);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
				}
			}
			n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r)
		}
		const J = {
				[s]: t.REPEAT,
				[o]: t.CLAMP_TO_EDGE,
				[l]: t.MIRRORED_REPEAT
			},
			K = {
				[c]: t.NEAREST,
				1004: t.NEAREST_MIPMAP_NEAREST,
				1005: t.NEAREST_MIPMAP_LINEAR,
				[h]: t.LINEAR,
				1007: t.LINEAR_MIPMAP_NEAREST,
				[u]: t.LINEAR_MIPMAP_LINEAR
			};

		function Q(n, a, s) {
			if (s ? (t.texParameteri(n, t.TEXTURE_WRAP_S, J[a.wrapS]), t.texParameteri(n, t.TEXTURE_WRAP_T, J[a.wrapT]), n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, J[a.wrapR]), t.texParameteri(n, t.TEXTURE_MAG_FILTER, K[a.magFilter]), t.texParameteri(n, t.TEXTURE_MIN_FILTER, K[a.minFilter])) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE), a.wrapS === o && a.wrapT === o || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, t.TEXTURE_MAG_FILTER, W(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, W(a.minFilter)), a.minFilter !== c && a.minFilter !== h && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
				const s = e.get("EXT_texture_filter_anisotropic");
				if (a.type === f && !1 === e.has("OES_texture_float_linear")) return;
				if (!1 === b && a.type === m && !1 === e.has("OES_texture_half_float_linear")) return;
				(a.anisotropy > 1 || i.get(a)
					.__currentAnisotropy) && (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a)
					.__currentAnisotropy = a.anisotropy)
			}
		}

		function $(e, n) {
			let i = !1;
			void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", X));
			const r = n.source;
			let a = O.get(r);
			void 0 === a && (a = {}, O.set(r, a));
			const s = function(t) {
				const e = [];
				return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join()
			}(n);
			if (s !== e.__cacheKey) {
				void 0 === a[s] && (a[s] = {
					texture: t.createTexture(),
					usedTimes: 0
				}, y.memory.textures++, i = !0), a[s].usedTimes++;
				const r = a[e.__cacheKey];
				void 0 !== r && (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && q(n)), e.__cacheKey = s, e.__webglTexture = a[s].texture
			}
			return i
		}

		function tt(e, r, s) {
			let l = t.TEXTURE_2D;
			r.isDataArrayTexture && (l = t.TEXTURE_2D_ARRAY), r.isData3DTexture && (l = t.TEXTURE_3D);
			const u = $(e, r),
				d = r.source;
			n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + s);
			const m = i.get(d);
			if (d.version !== m.__version || !0 === u) {
				n.activeTexture(t.TEXTURE0 + s), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
				const e = function(t) {
					return !b && (t.wrapS !== o || t.wrapT !== o || t.minFilter !== c && t.minFilter !== h)
				}(r) && !1 === B(r.image);
				let i = U(r.image, e, !1, T);
				i = st(r, i);
				const y = B(i) || b,
					M = a.convert(r.format, r.encoding);
				let S, E = a.convert(r.type),
					w = G(r.internalFormat, M, E, r.encoding, r.isVideoTexture);
				Q(l, r, y);
				const A = r.mipmaps,
					R = b && !0 !== r.isVideoTexture,
					C = void 0 === m.__version || !0 === u,
					L = V(r, i, y);
				if (r.isDepthTexture) w = t.DEPTH_COMPONENT, b ? w = r.type === f ? t.DEPTH_COMPONENT32F : r.type === p ? t.DEPTH_COMPONENT24 : r.type === g ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT16 : r.type === f && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format === v && w === t.DEPTH_COMPONENT && 1012 !== r.type && r.type !== p && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = p, E = a.convert(r.type)), r.format === x && w === t.DEPTH_COMPONENT && (w = t.DEPTH_STENCIL, r.type !== g && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = g, E = a.convert(r.type))), C && (R ? n.texStorage2D(t.TEXTURE_2D, 1, w, i.width, i.height) : n.texImage2D(t.TEXTURE_2D, 0, w, i.width, i.height, 0, M, E, null));
				else if (r.isDataTexture)
					if (A.length > 0 && y) {
						R && C && n.texStorage2D(t.TEXTURE_2D, L, w, A[0].width, A[0].height);
						for (let e = 0, i = A.length; e < i; e++) S = A[e], R ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, S.width, S.height, M, E, S.data) : n.texImage2D(t.TEXTURE_2D, e, w, S.width, S.height, 0, M, E, S.data);
						r.generateMipmaps = !1
					} else R ? (C && n.texStorage2D(t.TEXTURE_2D, L, w, i.width, i.height), n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, i.width, i.height, M, E, i.data)) : n.texImage2D(t.TEXTURE_2D, 0, w, i.width, i.height, 0, M, E, i.data);
				else if (r.isCompressedTexture) {
					R && C && n.texStorage2D(t.TEXTURE_2D, L, w, A[0].width, A[0].height);
					for (let e = 0, i = A.length; e < i; e++) S = A[e], r.format !== _ ? null !== M ? R ? n.compressedTexSubImage2D(t.TEXTURE_2D, e, 0, 0, S.width, S.height, M, S.data) : n.compressedTexImage2D(t.TEXTURE_2D, e, w, S.width, S.height, 0, S.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, S.width, S.height, M, E, S.data) : n.texImage2D(t.TEXTURE_2D, e, w, S.width, S.height, 0, M, E, S.data)
				} else if (r.isDataArrayTexture) R ? (C && n.texStorage3D(t.TEXTURE_2D_ARRAY, L, w, i.width, i.height, i.depth), n.texSubImage3D(t.TEXTURE_2D_ARRAY, 0, 0, 0, 0, i.width, i.height, i.depth, M, E, i.data)) : n.texImage3D(t.TEXTURE_2D_ARRAY, 0, w, i.width, i.height, i.depth, 0, M, E, i.data);
				else if (r.isData3DTexture) R ? (C && n.texStorage3D(t.TEXTURE_3D, L, w, i.width, i.height, i.depth), n.texSubImage3D(t.TEXTURE_3D, 0, 0, 0, 0, i.width, i.height, i.depth, M, E, i.data)) : n.texImage3D(t.TEXTURE_3D, 0, w, i.width, i.height, i.depth, 0, M, E, i.data);
				else if (r.isFramebufferTexture) {
					if (C)
						if (R) n.texStorage2D(t.TEXTURE_2D, L, w, i.width, i.height);
						else {
							let e = i.width,
								r = i.height;
							for (let i = 0; i < L; i++) n.texImage2D(t.TEXTURE_2D, i, w, e, r, 0, M, E, null), e >>= 1, r >>= 1
						}
				} else if (A.length > 0 && y) {
					R && C && n.texStorage2D(t.TEXTURE_2D, L, w, A[0].width, A[0].height);
					for (let e = 0, i = A.length; e < i; e++) S = A[e], R ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, M, E, S) : n.texImage2D(t.TEXTURE_2D, e, w, M, E, S);
					r.generateMipmaps = !1
				} else R ? (C && n.texStorage2D(t.TEXTURE_2D, L, w, i.width, i.height), n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, M, E, i)) : n.texImage2D(t.TEXTURE_2D, 0, w, M, E, i);
				H(r, y) && k(l), m.__version = d.version, r.onUpdate && r.onUpdate(r)
			}
			e.__version = r.version
		}

		function et(e, r, s, o, l) {
			const c = a.convert(s.format, s.encoding),
				h = a.convert(s.type),
				u = G(s.internalFormat, c, h, s.encoding);
			i.get(r)
				.__hasExternalTextures || (l === t.TEXTURE_3D || l === t.TEXTURE_2D_ARRAY ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), n.bindFramebuffer(t.FRAMEBUFFER, e), at(r) ? R.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, o, l, i.get(s)
					.__webglTexture, 0, rt(r)) : t.framebufferTexture2D(t.FRAMEBUFFER, o, l, i.get(s)
					.__webglTexture, 0), n.bindFramebuffer(t.FRAMEBUFFER, null)
		}

		function nt(e, n, i) {
			if (t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer) {
				let r = t.DEPTH_COMPONENT16;
				if (i || at(n)) {
					const e = n.depthTexture;
					e && e.isDepthTexture && (e.type === f ? r = t.DEPTH_COMPONENT32F : e.type === p && (r = t.DEPTH_COMPONENT24));
					const i = rt(n);
					at(n) ? R.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, i, r, n.width, n.height) : t.renderbufferStorageMultisample(t.RENDERBUFFER, i, r, n.width, n.height)
				} else t.renderbufferStorage(t.RENDERBUFFER, r, n.width, n.height);
				t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)
			} else if (n.depthBuffer && n.stencilBuffer) {
				const r = rt(n);
				i && !1 === at(n) ? t.renderbufferStorageMultisample(t.RENDERBUFFER, r, t.DEPTH24_STENCIL8, n.width, n.height) : at(n) ? R.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, r, t.DEPTH24_STENCIL8, n.width, n.height) : t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)
			} else {
				const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
				for (let r = 0; r < e.length; r++) {
					const s = e[r],
						o = a.convert(s.format, s.encoding),
						l = a.convert(s.type),
						c = G(s.internalFormat, o, l, s.encoding),
						h = rt(n);
					i && !1 === at(n) ? t.renderbufferStorageMultisample(t.RENDERBUFFER, h, c, n.width, n.height) : at(n) ? R.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, h, c, n.width, n.height) : t.renderbufferStorage(t.RENDERBUFFER, c, n.width, n.height)
				}
			}
			t.bindRenderbuffer(t.RENDERBUFFER, null)
		}

		function it(e) {
			const r = i.get(e),
				a = !0 === e.isWebGLCubeRenderTarget;
			if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
				if (a) throw new Error("target.depthTexture not supported in Cube render targets");
				! function(e, r) {
					if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
					if (n.bindFramebuffer(t.FRAMEBUFFER, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
					i.get(r.depthTexture)
						.__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), Z(r.depthTexture, 0);
					const a = i.get(r.depthTexture)
						.__webglTexture,
						s = rt(r);
					if (r.depthTexture.format === v) at(r) ? R.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, a, 0, s) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, a, 0);
					else {
						if (r.depthTexture.format !== x) throw new Error("Unknown depthTexture format");
						at(r) ? R.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, a, 0, s) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, a, 0)
					}
				}(r.__webglFramebuffer, e)
			} else if (a) {
				r.__webglDepthbuffer = [];
				for (let i = 0; i < 6; i++) n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), nt(r.__webglDepthbuffer[i], e, !1)
			} else n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), nt(r.__webglDepthbuffer, e, !1);
			n.bindFramebuffer(t.FRAMEBUFFER, null)
		}

		function rt(t) {
			return Math.min(A, t.samples)
		}

		function at(t) {
			const n = i.get(t);
			return b && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
		}

		function st(t, n) {
			const i = t.encoding,
				r = t.format,
				a = t.type;
			return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === L || i !== E && (i === w ? !1 === b ? !0 === e.has("EXT_sRGB") && r === _ ? (t.format = L, t.minFilter = h, t.generateMipmaps = !1) : n = Tn.sRGBToLinear(n) : r === _ && a === d || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n
		}
		this.allocateTextureUnit = function() {
			const t = Y;
			return t >= M && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + M), Y += 1, t
		}, this.resetTextureUnits = function() {
			Y = 0
		}, this.setTexture2D = Z, this.setTexture2DArray = function(e, r) {
			const a = i.get(e);
			e.version > 0 && a.__version !== e.version ? tt(a, e, r) : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r)
		}, this.setTexture3D = function(e, r) {
			const a = i.get(e);
			e.version > 0 && a.__version !== e.version ? tt(a, e, r) : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r)
		}, this.setTextureCube = function(e, r) {
			const s = i.get(e);
			e.version > 0 && s.__version !== e.version ? function(e, r, s) {
				if (6 !== r.image.length) return;
				const o = $(e, r),
					l = r.source;
				n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture, t.TEXTURE0 + s);
				const c = i.get(l);
				if (l.version !== c.__version || !0 === o) {
					n.activeTexture(t.TEXTURE0 + s), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
					const e = r.isCompressedTexture || r.image[0].isCompressedTexture,
						i = r.image[0] && r.image[0].isDataTexture,
						h = [];
					for (let t = 0; t < 6; t++) h[t] = e || i ? i ? r.image[t].image : r.image[t] : U(r.image[t], !1, !0, S), h[t] = st(r, h[t]);
					const u = h[0],
						d = B(u) || b,
						p = a.convert(r.format, r.encoding),
						f = a.convert(r.type),
						m = G(r.internalFormat, p, f, r.encoding),
						g = b && !0 !== r.isVideoTexture,
						v = void 0 === c.__version || !0 === o;
					let x, y = V(r, u, d);
					if (Q(t.TEXTURE_CUBE_MAP, r, d), e) {
						g && v && n.texStorage2D(t.TEXTURE_CUBE_MAP, y, m, u.width, u.height);
						for (let e = 0; e < 6; e++) {
							x = h[e].mipmaps;
							for (let i = 0; i < x.length; i++) {
								const a = x[i];
								r.format !== _ ? null !== p ? g ? n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, 0, 0, a.width, a.height, p, a.data) : n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, m, a.width, a.height, 0, a.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, 0, 0, a.width, a.height, p, f, a.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, m, a.width, a.height, 0, p, f, a.data)
							}
						}
					} else {
						x = r.mipmaps, g && v && (x.length > 0 && y++, n.texStorage2D(t.TEXTURE_CUBE_MAP, y, m, h[0].width, h[0].height));
						for (let e = 0; e < 6; e++)
							if (i) {
								g ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, h[e].width, h[e].height, p, f, h[e].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, m, h[e].width, h[e].height, 0, p, f, h[e].data);
								for (let i = 0; i < x.length; i++) {
									const r = x[i].image[e].image;
									g ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, r.width, r.height, p, f, r.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, m, r.width, r.height, 0, p, f, r.data)
								}
							} else {
								g ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, p, f, h[e]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, m, p, f, h[e]);
								for (let i = 0; i < x.length; i++) {
									const r = x[i];
									g ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, p, f, r.image[e]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, m, p, f, r.image[e])
								}
							}
					}
					H(r, d) && k(t.TEXTURE_CUBE_MAP), c.__version = l.version, r.onUpdate && r.onUpdate(r)
				}
				e.__version = r.version
			}(s, e, r) : n.bindTexture(t.TEXTURE_CUBE_MAP, s.__webglTexture, t.TEXTURE0 + r)
		}, this.rebindTextures = function(e, n, r) {
			const a = i.get(e);
			void 0 !== n && et(a.__webglFramebuffer, e, e.texture, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), void 0 !== r && it(e)
		}, this.setupRenderTarget = function(e) {
			const s = e.texture,
				o = i.get(e),
				l = i.get(s);
			e.addEventListener("dispose", j), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === l.__webglTexture && (l.__webglTexture = t.createTexture()), l.__version = s.version, y.memory.textures++);
			const c = !0 === e.isWebGLCubeRenderTarget,
				h = !0 === e.isWebGLMultipleRenderTargets,
				u = B(e) || b;
			if (c) {
				o.__webglFramebuffer = [];
				for (let e = 0; e < 6; e++) o.__webglFramebuffer[e] = t.createFramebuffer()
			} else {
				if (o.__webglFramebuffer = t.createFramebuffer(), h)
					if (r.drawBuffers) {
						const n = e.texture;
						for (let e = 0, r = n.length; e < r; e++) {
							const r = i.get(n[e]);
							void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), y.memory.textures++)
						}
					} else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
				if (b && e.samples > 0 && !1 === at(e)) {
					const i = h ? s : [s];
					o.__webglMultisampledFramebuffer = t.createFramebuffer(), o.__webglColorRenderbuffer = [], n.bindFramebuffer(t.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
					for (let n = 0; n < i.length; n++) {
						const r = i[n];
						o.__webglColorRenderbuffer[n] = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
						const s = a.convert(r.format, r.encoding),
							l = a.convert(r.type),
							c = G(r.internalFormat, s, l, r.encoding, !0 === e.isXRRenderTarget),
							h = rt(e);
						t.renderbufferStorageMultisample(t.RENDERBUFFER, h, c, e.width, e.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + n, t.RENDERBUFFER, o.__webglColorRenderbuffer[n])
					}
					t.bindRenderbuffer(t.RENDERBUFFER, null), e.depthBuffer && (o.__webglDepthRenderbuffer = t.createRenderbuffer(), nt(o.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(t.FRAMEBUFFER, null)
				}
			}
			if (c) {
				n.bindTexture(t.TEXTURE_CUBE_MAP, l.__webglTexture), Q(t.TEXTURE_CUBE_MAP, s, u);
				for (let n = 0; n < 6; n++) et(o.__webglFramebuffer[n], e, s, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + n);
				H(s, u) && k(t.TEXTURE_CUBE_MAP), n.unbindTexture()
			} else if (h) {
				const r = e.texture;
				for (let a = 0, s = r.length; a < s; a++) {
					const s = r[a],
						l = i.get(s);
					n.bindTexture(t.TEXTURE_2D, l.__webglTexture), Q(t.TEXTURE_2D, s, u), et(o.__webglFramebuffer, e, s, t.COLOR_ATTACHMENT0 + a, t.TEXTURE_2D), H(s, u) && k(t.TEXTURE_2D)
				}
				n.unbindTexture()
			} else {
				let i = t.TEXTURE_2D;
				(e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (b ? i = e.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(i, l.__webglTexture), Q(i, s, u), et(o.__webglFramebuffer, e, s, t.COLOR_ATTACHMENT0, i), H(s, u) && k(i), n.unbindTexture()
			}
			e.depthBuffer && it(e)
		}, this.updateRenderTargetMipmap = function(e) {
			const r = B(e) || b,
				a = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
			for (let s = 0, o = a.length; s < o; s++) {
				const o = a[s];
				if (H(o, r)) {
					const r = e.isWebGLCubeRenderTarget ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
						a = i.get(o)
						.__webglTexture;
					n.bindTexture(r, a), k(r), n.unbindTexture()
				}
			}
		}, this.updateMultisampleRenderTarget = function(e) {
			if (b && e.samples > 0 && !1 === at(e)) {
				const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
					a = e.width,
					s = e.height;
				let o = t.COLOR_BUFFER_BIT;
				const l = [],
					c = e.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
					h = i.get(e),
					u = !0 === e.isWebGLMultipleRenderTargets;
				if (u)
					for (let e = 0; e < r.length; e++) n.bindFramebuffer(t.FRAMEBUFFER, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.RENDERBUFFER, null), n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer), t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.TEXTURE_2D, null, 0);
				n.bindFramebuffer(t.READ_FRAMEBUFFER, h.__webglMultisampledFramebuffer), n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
				for (let n = 0; n < r.length; n++) {
					l.push(t.COLOR_ATTACHMENT0 + n), e.depthBuffer && l.push(c);
					const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
					if (!1 === d && (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT), e.stencilBuffer && (o |= t.STENCIL_BUFFER_BIT)), u && t.framebufferRenderbuffer(t.READ_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, h.__webglColorRenderbuffer[n]), !0 === d && (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [c]), t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [c])), u) {
						const e = i.get(r[n])
							.__webglTexture;
						t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e, 0)
					}
					t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST), C && t.invalidateFramebuffer(t.READ_FRAMEBUFFER, l)
				}
				if (n.bindFramebuffer(t.READ_FRAMEBUFFER, null), n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), u)
					for (let e = 0; e < r.length; e++) {
						n.bindFramebuffer(t.FRAMEBUFFER, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.RENDERBUFFER, h.__webglColorRenderbuffer[e]);
						const a = i.get(r[e])
							.__webglTexture;
						n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer), t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.TEXTURE_2D, a, 0)
					}
				n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglMultisampledFramebuffer)
			}
		}, this.setupDepthRenderbuffer = it, this.setupFrameBufferTexture = et, this.useMultisampledRTT = at
	}

	function Zr(t, e, n) {
		const i = n.isWebGL2;
		return {
			convert: function(n, r = null) {
				let a;
				if (n === d) return t.UNSIGNED_BYTE;
				if (1017 === n) return t.UNSIGNED_SHORT_4_4_4_4;
				if (1018 === n) return t.UNSIGNED_SHORT_5_5_5_1;
				if (1010 === n) return t.BYTE;
				if (1011 === n) return t.SHORT;
				if (1012 === n) return t.UNSIGNED_SHORT;
				if (1013 === n) return t.INT;
				if (n === p) return t.UNSIGNED_INT;
				if (n === f) return t.FLOAT;
				if (n === m) return i ? t.HALF_FLOAT : (a = e.get("OES_texture_half_float"), null !== a ? a.HALF_FLOAT_OES : null);
				if (1021 === n) return t.ALPHA;
				if (n === _) return t.RGBA;
				if (1024 === n) return t.LUMINANCE;
				if (1025 === n) return t.LUMINANCE_ALPHA;
				if (n === v) return t.DEPTH_COMPONENT;
				if (n === x) return t.DEPTH_STENCIL;
				if (1028 === n) return t.RED;
				if (1022 === n) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), t.RGBA;
				if (n === L) return a = e.get("EXT_sRGB"), null !== a ? a.SRGB_ALPHA_EXT : null;
				if (1029 === n) return t.RED_INTEGER;
				if (1030 === n) return t.RG;
				if (1031 === n) return t.RG_INTEGER;
				if (1033 === n) return t.RGBA_INTEGER;
				if (n === y || n === b || n === M || n === S)
					if (r === w) {
						if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === a) return null;
						if (n === y) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
						if (n === b) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
						if (n === M) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
						if (n === S) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
					} else {
						if (a = e.get("WEBGL_compressed_texture_s3tc"), null === a) return null;
						if (n === y) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (n === b) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (n === M) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (n === S) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
					} if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
					if (a = e.get("WEBGL_compressed_texture_pvrtc"), null === a) return null;
					if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
					if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
					if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
					if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
				}
				if (36196 === n) return a = e.get("WEBGL_compressed_texture_etc1"), null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
				if (37492 === n || 37496 === n) {
					if (a = e.get("WEBGL_compressed_texture_etc"), null === a) return null;
					if (37492 === n) return r === w ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
					if (37496 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
				}
				if (37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) {
					if (a = e.get("WEBGL_compressed_texture_astc"), null === a) return null;
					if (37808 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
					if (37809 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
					if (37810 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
					if (37811 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
					if (37812 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
					if (37813 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
					if (37814 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
					if (37815 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
					if (37816 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
					if (37817 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
					if (37818 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
					if (37819 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
					if (37820 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
					if (37821 === n) return r === w ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
				}
				if (36492 === n) {
					if (a = e.get("EXT_texture_compression_bptc"), null === a) return null;
					if (36492 === n) return r === w ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
				}
				return n === g ? i ? t.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[n] ? t[n] : null
			}
		}
	}
	class Jr extends On {
		constructor(t = []) {
			super(), this.isArrayCamera = !0, this.cameras = t
		}
	}
	class Kr extends ee {
		constructor() {
			super(), this.isGroup = !0, this.type = "Group"
		}
	}
	const Qr = {
		type: "move"
	};
	class $r {
		constructor() {
			this._targetRay = null, this._grip = null, this._hand = null
		}
		getHandSpace() {
			return null === this._hand && (this._hand = new Kr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
				pinching: !1
			}), this._hand
		}
		getTargetRaySpace() {
			return null === this._targetRay && (this._targetRay = new Kr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new G, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new G), this._targetRay
		}
		getGripSpace() {
			return null === this._grip && (this._grip = new Kr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new G, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new G), this._grip
		}
		dispatchEvent(t) {
			return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
		}
		disconnect(t) {
			return this.dispatchEvent({
				type: "disconnected",
				data: t
			}), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
		}
		update(t, e, n) {
			let i = null,
				r = null,
				a = null;
			const s = this._targetRay,
				o = this._grip,
				l = this._hand;
			if (t && "visible-blurred" !== e.session.visibilityState) {
				if (l && t.hand) {
					a = !0;
					for (const i of t.hand.values()) {
						const t = e.getJointPose(i, n);
						if (void 0 === l.joints[i.jointName]) {
							const t = new Kr;
							t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t)
						}
						const r = l.joints[i.jointName];
						null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
					}
					const i = l.joints["index-finger-tip"],
						r = l.joints["thumb-tip"],
						s = i.position.distanceTo(r.position),
						o = .02,
						c = .005;
					l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
						type: "pinchend",
						handedness: t.handedness,
						target: this
					})) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
						type: "pinchstart",
						handedness: t.handedness,
						target: this
					}))
				} else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
				null !== s && (i = e.getPose(t.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(Qr)))
			}
			return null !== s && (s.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== a), this
		}
	}
	class ta extends Ln {
		constructor(t, e, n, i, r, a, s, o, l, h) {
			if ((h = void 0 !== h ? h : v) !== v && h !== x) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
			void 0 === n && h === v && (n = p), void 0 === n && h === x && (n = g), super(null, i, r, a, s, o, h, n, l), this.isDepthTexture = !0, this.image = {
				width: t,
				height: e
			}, this.magFilter = void 0 !== s ? s : c, this.minFilter = void 0 !== o ? o : c, this.flipY = !1, this.generateMipmaps = !1
		}
	}
	class ea extends Pt {
		constructor(t, e) {
			super();
			const n = this;
			let i = null,
				r = 1,
				a = null,
				s = "local-floor",
				o = null,
				l = null,
				c = null,
				h = null,
				u = null,
				f = null;
			const m = e.getContextAttributes();
			let y = null,
				b = null;
			const M = [],
				S = [],
				E = new On;
			E.layers.enable(1), E.viewport = new Rt;
			const w = new On;
			w.layers.enable(2), w.viewport = new Rt;
			const T = [E, w],
				A = new Jr;
			A.layers.enable(1), A.layers.enable(2);
			let R = null,
				C = null;

			function L(t) {
				const e = S.indexOf(t.inputSource);
				if (-1 === e) return;
				const n = M[e];
				void 0 !== n && n.dispatchEvent({
					type: t.type,
					data: t.inputSource
				})
			}

			function P() {
				i.removeEventListener("select", L), i.removeEventListener("selectstart", L), i.removeEventListener("selectend", L), i.removeEventListener("squeeze", L), i.removeEventListener("squeezestart", L), i.removeEventListener("squeezeend", L), i.removeEventListener("end", P), i.removeEventListener("inputsourceschange", D);
				for (let t = 0; t < M.length; t++) {
					const e = S[t];
					null !== e && (S[t] = null, M[t].disconnect(e))
				}
				R = null, C = null, t.setRenderTarget(y), u = null, h = null, c = null, i = null, b = null, F.stop(), n.isPresenting = !1, n.dispatchEvent({
					type: "sessionend"
				})
			}

			function D(t) {
				for (let e = 0; e < t.removed.length; e++) {
					const n = t.removed[e],
						i = S.indexOf(n);
					i >= 0 && (S[i] = null, M[i].dispatchEvent({
						type: "disconnected",
						data: n
					}))
				}
				for (let e = 0; e < t.added.length; e++) {
					const n = t.added[e];
					let i = S.indexOf(n);
					if (-1 === i) {
						for (let t = 0; t < M.length; t++) {
							if (t >= S.length) {
								S.push(n), i = t;
								break
							}
							if (null === S[t]) {
								S[t] = n, i = t;
								break
							}
						}
						if (-1 === i) break
					}
					const r = M[i];
					r && r.dispatchEvent({
						type: "connected",
						data: n
					})
				}
			}
			this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
				let e = M[t];
				return void 0 === e && (e = new $r, M[t] = e), e.getTargetRaySpace()
			}, this.getControllerGrip = function(t) {
				let e = M[t];
				return void 0 === e && (e = new $r, M[t] = e), e.getGripSpace()
			}, this.getHand = function(t) {
				let e = M[t];
				return void 0 === e && (e = new $r, M[t] = e), e.getHandSpace()
			}, this.setFramebufferScaleFactor = function(t) {
				r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
			}, this.setReferenceSpaceType = function(t) {
				s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
			}, this.getReferenceSpace = function() {
				return o || a
			}, this.setReferenceSpace = function(t) {
				o = t
			}, this.getBaseLayer = function() {
				return null !== h ? h : u
			}, this.getBinding = function() {
				return c
			}, this.getFrame = function() {
				return f
			}, this.getSession = function() {
				return i
			}, this.setSession = async function(l) {
				if (i = l, null !== i) {
					if (y = t.getRenderTarget(), i.addEventListener("select", L), i.addEventListener("selectstart", L), i.addEventListener("selectend", L), i.addEventListener("squeeze", L), i.addEventListener("squeezestart", L), i.addEventListener("squeezeend", L), i.addEventListener("end", P), i.addEventListener("inputsourceschange", D), !0 !== m.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) {
						const n = {
							antialias: void 0 !== i.renderState.layers || m.antialias,
							alpha: m.alpha,
							depth: m.depth,
							stencil: m.stencil,
							framebufferScaleFactor: r
						};
						u = new XRWebGLLayer(i, e, n), i.updateRenderState({
							baseLayer: u
						}), b = new Pn(u.framebufferWidth, u.framebufferHeight, {
							format: _,
							type: d,
							encoding: t.outputEncoding,
							stencilBuffer: m.stencil
						})
					} else {
						let n = null,
							a = null,
							s = null;
						m.depth && (s = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, n = m.stencil ? x : v, a = m.stencil ? g : p);
						const o = {
							colorFormat: e.RGBA8,
							depthFormat: s,
							scaleFactor: r
						};
						c = new XRWebGLBinding(i, e), h = c.createProjectionLayer(o), i.updateRenderState({
								layers: [h]
							}), b = new Pn(h.textureWidth, h.textureHeight, {
								format: _,
								type: d,
								depthTexture: new ta(h.textureWidth, h.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
								stencilBuffer: m.stencil,
								encoding: t.outputEncoding,
								samples: m.antialias ? 4 : 0
							}), t.properties.get(b)
							.__ignoreDepthValues = h.ignoreDepthValues
					}
					b.isXRRenderTarget = !0, this.setFoveation(1), o = null, a = await i.requestReferenceSpace(s), F.setContext(i), F.start(), n.isPresenting = !0, n.dispatchEvent({
						type: "sessionstart"
					})
				}
			};
			const O = new G,
				N = new G;

			function I(t, e) {
				null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld)
					.invert()
			}
			this.updateCamera = function(t) {
				if (null === i) return;
				A.near = w.near = E.near = t.near, A.far = w.far = E.far = t.far, R === A.near && C === A.far || (i.updateRenderState({
					depthNear: A.near,
					depthFar: A.far
				}), R = A.near, C = A.far);
				const e = t.parent,
					n = A.cameras;
				I(A, e);
				for (let t = 0; t < n.length; t++) I(n[t], e);
				A.matrixWorld.decompose(A.position, A.quaternion, A.scale), t.matrix.copy(A.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
				const r = t.children;
				for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
				2 === n.length ? function(t, e, n) {
					O.setFromMatrixPosition(e.matrixWorld), N.setFromMatrixPosition(n.matrixWorld);
					const i = O.distanceTo(N),
						r = e.projectionMatrix.elements,
						a = n.projectionMatrix.elements,
						s = r[14] / (r[10] - 1),
						o = r[14] / (r[10] + 1),
						l = (r[9] + 1) / r[5],
						c = (r[9] - 1) / r[5],
						h = (r[8] - 1) / r[0],
						u = (a[8] + 1) / a[0],
						d = s * h,
						p = s * u,
						f = i / (-h + u),
						m = f * -h;
					e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld)
						.invert();
					const g = s + f,
						_ = o + f,
						v = d - m,
						x = p + (i - m),
						y = l * o / _ * g,
						b = c * o / _ * g;
					t.projectionMatrix.makePerspective(v, x, y, b, g, _)
				}(A, E, w) : A.projectionMatrix.copy(E.projectionMatrix)
			}, this.getCamera = function() {
				return A
			}, this.getFoveation = function() {
				return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0
			}, this.setFoveation = function(t) {
				null !== h && (h.fixedFoveation = t), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t)
			};
			let U = null;
			const F = new Ct;
			F.setAnimationLoop((function(e, n) {
				if (l = n.getViewerPose(o || a), f = n, null !== l) {
					const e = l.views;
					null !== u && (t.setRenderTargetFramebuffer(b, u.framebuffer), t.setRenderTarget(b));
					let n = !1;
					e.length !== A.cameras.length && (A.cameras.length = 0, n = !0);
					for (let i = 0; i < e.length; i++) {
						const r = e[i];
						let a = null;
						if (null !== u) a = u.getViewport(r);
						else {
							const e = c.getViewSubImage(h, r);
							a = e.viewport, 0 === i && (t.setRenderTargetTextures(b, e.colorTexture, h.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(b))
						}
						let s = T[i];
						void 0 === s && (s = new On, s.layers.enable(i), s.viewport = new Rt, T[i] = s), s.matrix.fromArray(r.transform.matrix), s.projectionMatrix.fromArray(r.projectionMatrix), s.viewport.set(a.x, a.y, a.width, a.height), 0 === i && A.matrix.copy(s.matrix), !0 === n && A.cameras.push(s)
					}
				}
				for (let t = 0; t < M.length; t++) {
					const e = S[t],
						i = M[t];
					null !== e && void 0 !== i && i.update(e, n, o || a)
				}
				U && U(e, n), f = null
			})), this.setAnimationLoop = function(t) {
				U = t
			}, this.dispose = function() {}
		}
	}

	function na(t, e) {
		function n(n, i) {
			n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive)
				.multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, 1 === i.side && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), 1 === i.side && n.normalScale.value.negate()), i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
			const r = e.get(i)
				.envMap;
			if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), i.lightMap) {
				n.lightMap.value = i.lightMap;
				const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
				n.lightMapIntensity.value = i.lightMapIntensity * e
			}
			let a, s;
			i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? a = i.map : i.specularMap ? a = i.specularMap : i.displacementMap ? a = i.displacementMap : i.normalMap ? a = i.normalMap : i.bumpMap ? a = i.bumpMap : i.roughnessMap ? a = i.roughnessMap : i.metalnessMap ? a = i.metalnessMap : i.alphaMap ? a = i.alphaMap : i.emissiveMap ? a = i.emissiveMap : i.clearcoatMap ? a = i.clearcoatMap : i.clearcoatNormalMap ? a = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? a = i.clearcoatRoughnessMap : i.iridescenceMap ? a = i.iridescenceMap : i.iridescenceThicknessMap ? a = i.iridescenceThicknessMap : i.specularIntensityMap ? a = i.specularIntensityMap : i.specularColorMap ? a = i.specularColorMap : i.transmissionMap ? a = i.transmissionMap : i.thicknessMap ? a = i.thicknessMap : i.sheenColorMap ? a = i.sheenColorMap : i.sheenRoughnessMap && (a = i.sheenRoughnessMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uvTransform.value.copy(a.matrix)), i.aoMap ? s = i.aoMap : i.lightMap && (s = i.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), n.uv2Transform.value.copy(s.matrix))
		}
		return {
			refreshFogUniforms: function(t, e) {
				t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
			},
			refreshMaterialUniforms: function(t, i, r, a, s) {
				i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(t, i) : i.isMeshToonMaterial ? (n(t, i), function(t, e) {
					e.gradientMap && (t.gradientMap.value = e.gradientMap)
				}(t, i)) : i.isMeshPhongMaterial ? (n(t, i), function(t, e) {
					t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
				}(t, i)) : i.isMeshStandardMaterial ? (n(t, i), function(t, n) {
					t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap), n.metalnessMap && (t.metalnessMap.value = n.metalnessMap), e.get(n)
						.envMap && (t.envMapIntensity.value = n.envMapIntensity)
				}(t, i), i.isMeshPhysicalMaterial && function(t, e, n) {
					t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor)
						.multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)), e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate())), e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap)), e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = n.texture, t.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor)), t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap), e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
				}(t, i, s)) : i.isMeshMatcapMaterial ? (n(t, i), function(t, e) {
					e.matcap && (t.matcap.value = e.matcap)
				}(t, i)) : i.isMeshDepthMaterial ? n(t, i) : i.isMeshDistanceMaterial ? (n(t, i), function(t, e) {
					t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
				}(t, i)) : i.isMeshNormalMaterial ? n(t, i) : i.isLineBasicMaterial ? (function(t, e) {
					t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
				}(t, i), i.isLineDashedMaterial && function(t, e) {
					t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
				}(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
					let r;
					t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
				}(t, i, r, a) : i.isSpriteMaterial ? function(t, e) {
					let n;
					t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? n = e.map : e.alphaMap && (n = e.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
				}(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
			}
		}
	}

	function ia(t, e, n, i) {
		let r = {},
			a = {},
			s = [];
		const o = n.isWebGL2 ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS) : 0;

		function l(t, e, n) {
			const i = t.value;
			if (void 0 === n[e]) return n[e] = "number" == typeof i ? i : i.clone(), !0;
			if ("number" == typeof i) {
				if (n[e] !== i) return n[e] = i, !0
			} else {
				const t = n[e];
				if (!1 === t.equals(i)) return t.copy(i), !0
			}
			return !1
		}

		function c(t) {
			const e = t.value,
				n = {
					boundary: 0,
					storage: 0
				};
			return "number" == typeof e ? (n.boundary = 4, n.storage = 4) : e.isVector2 ? (n.boundary = 8, n.storage = 8) : e.isVector3 || e.isColor ? (n.boundary = 16, n.storage = 12) : e.isVector4 ? (n.boundary = 16, n.storage = 16) : e.isMatrix3 ? (n.boundary = 48, n.storage = 48) : e.isMatrix4 ? (n.boundary = 64, n.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), n
		}

		function h(e) {
			const n = e.target;
			n.removeEventListener("dispose", h);
			const i = s.indexOf(n.__bindingPointIndex);
			s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id]
		}
		return {
			bind: function(t, e) {
				const n = e.program;
				i.uniformBlockBinding(t, n)
			},
			update: function(n, u) {
				let d = r[n.id];
				void 0 === d && (function(t) {
					const e = t.uniforms;
					let n = 0;
					let i = 0;
					for (let t = 0, r = e.length; t < r; t++) {
						const r = e[t],
							a = c(r);
						if (r.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), r.__offset = n, t > 0) {
							i = n % 16;
							const t = 16 - i;
							0 !== i && t - a.boundary < 0 && (n += 16 - i, r.__offset = n)
						}
						n += a.storage
					}
					i = n % 16, i > 0 && (n += 16 - i), t.__size = n, t.__cache = {}
				}(n), d = function(e) {
					const n = function() {
						for (let t = 0; t < o; t++)
							if (-1 === s.indexOf(t)) return s.push(t), t;
						return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
					}();
					e.__bindingPointIndex = n;
					const i = t.createBuffer(),
						r = e.__size,
						a = e.usage;
					return t.bindBuffer(t.UNIFORM_BUFFER, i), t.bufferData(t.UNIFORM_BUFFER, r, a), t.bindBuffer(t.UNIFORM_BUFFER, null), t.bindBufferBase(t.UNIFORM_BUFFER, n, i), i
				}(n), r[n.id] = d, n.addEventListener("dispose", h));
				const p = u.program;
				i.updateUBOMapping(n, p);
				const f = e.render.frame;
				a[n.id] !== f && (function(e) {
					const n = r[e.id],
						i = e.uniforms,
						a = e.__cache;
					t.bindBuffer(t.UNIFORM_BUFFER, n);
					for (let e = 0, n = i.length; e < n; e++) {
						const n = i[e];
						if (!0 === l(n, e, a)) {
							const e = n.value,
								i = n.__offset;
							"number" == typeof e ? (n.__data[0] = e, t.bufferSubData(t.UNIFORM_BUFFER, i, n.__data)) : (n.value.isMatrix3 ? (n.__data[0] = n.value.elements[0], n.__data[1] = n.value.elements[1], n.__data[2] = n.value.elements[2], n.__data[3] = n.value.elements[0], n.__data[4] = n.value.elements[3], n.__data[5] = n.value.elements[4], n.__data[6] = n.value.elements[5], n.__data[7] = n.value.elements[0], n.__data[8] = n.value.elements[6], n.__data[9] = n.value.elements[7], n.__data[10] = n.value.elements[8], n.__data[11] = n.value.elements[0]) : e.toArray(n.__data), t.bufferSubData(t.UNIFORM_BUFFER, i, n.__data))
						}
					}
					t.bindBuffer(t.UNIFORM_BUFFER, null)
				}(n), a[n.id] = f)
			},
			dispose: function() {
				for (const e in r) t.deleteBuffer(r[e]);
				s = [], r = {}, a = {}
			}
		}
	}

	function ra(t = {}) {
		this.isWebGLRenderer = !0;
		const e = void 0 !== t.canvas ? t.canvas : function() {
				const t = ie("canvas");
				return t.style.display = "block", t
			}(),
			n = void 0 !== t.context ? t.context : null,
			i = void 0 === t.depth || t.depth,
			r = void 0 === t.stencil || t.stencil,
			a = void 0 !== t.antialias && t.antialias,
			s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			l = void 0 !== t.powerPreference ? t.powerPreference : "default",
			c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
		let h;
		h = null !== n ? n.getContextAttributes()
			.alpha : void 0 !== t.alpha && t.alpha;
		let p = null,
			g = null;
		const v = [],
			x = [];
		this.domElement = e, this.debug = {
			checkShaderErrors: !0
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = E, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
			gammaFactor: {
				get: function() {
					return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
				},
				set: function() {
					console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
				}
			}
		});
		const y = this;
		let b = !1,
			M = 0,
			S = 0,
			w = null,
			T = -1,
			A = null;
		const R = new Rt,
			C = new Rt;
		let L = null,
			P = e.width,
			D = e.height,
			O = 1,
			N = null,
			I = null;
		const U = new Rt(0, 0, P, D),
			F = new Rt(0, 0, P, D);
		let B = !1;
		const H = new vt;
		let k = !1,
			V = !1,
			W = null;
		const X = new xt,
			j = new At,
			q = new G,
			Y = {
				background: null,
				fog: null,
				environment: null,
				overrideMaterial: null,
				isScene: !0
			};

		function Z() {
			return null === w ? O : 1
		}
		let J, K, Q, $, tt, et, nt, it, rt, at, st, ot, lt, ct, ht, ut, dt, pt, ft, mt, gt, _t, yt, bt, Mt = n;

		function St(t, n) {
			for (let i = 0; i < t.length; i++) {
				const r = t[i],
					a = e.getContext(r, n);
				if (null !== a) return a
			}
			return null
		}
		try {
			const t = {
				alpha: !0,
				depth: i,
				stencil: r,
				antialias: a,
				premultipliedAlpha: s,
				preserveDrawingBuffer: o,
				powerPreference: l,
				failIfMajorPerformanceCaveat: c
			};
			if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r145"), e.addEventListener("webglcontextlost", Tt, !1), e.addEventListener("webglcontextrestored", Pt, !1), e.addEventListener("webglcontextcreationerror", Dt, !1), null === Mt) {
				const e = ["webgl2", "webgl", "experimental-webgl"];
				if (!0 === y.isWebGL1Renderer && e.shift(), Mt = St(e, t), null === Mt) throw St(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
			}
			void 0 === Mt.getShaderPrecisionFormat && (Mt.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			})
		} catch (t) {
			throw console.error("THREE.WebGLRenderer: " + t.message), t
		}

		function Et() {
			J = new $n(Mt), K = new Sn(Mt, J, t), J.init(K), _t = new Zr(Mt, J, K), Q = new qr(Mt, J, K), $ = new ni(Mt), tt = new Or, et = new Yr(Mt, J, Q, tt, K, _t, $), nt = new zn(y), it = new Qn(y), rt = new Lt(Mt, K), yt = new bn(Mt, J, rt, K), at = new ti(Mt, rt, $, yt), st = new oi(Mt, at, rt, $), ft = new si(Mt, K, et), ut = new En(tt), ot = new Dr(y, nt, it, J, K, yt, ut), lt = new na(y, tt), ct = new Fr, ht = new Vr(J, K), pt = new yn(y, nt, Q, st, h, s), dt = new jr(y, st, K), bt = new ia(Mt, $, K, Q), mt = new Mn(Mt, J, $, K), gt = new ei(Mt, J, $, K), $.programs = ot.programs, y.capabilities = K, y.extensions = J, y.properties = tt, y.renderLists = ct, y.shadowMap = dt, y.state = Q, y.info = $
		}
		Et();
		const wt = new ea(y, Mt);

		function Tt(t) {
			t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0
		}

		function Pt() {
			console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
			const t = $.autoReset,
				e = dt.enabled,
				n = dt.autoUpdate,
				i = dt.needsUpdate,
				r = dt.type;
			Et(), $.autoReset = t, dt.enabled = e, dt.autoUpdate = n, dt.needsUpdate = i, dt.type = r
		}

		function Dt(t) {
			console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage)
		}

		function Ot(t) {
			const e = t.target;
			e.removeEventListener("dispose", Ot),
				function(t) {
					(function(t) {
						const e = tt.get(t)
							.programs;
						void 0 !== e && (e.forEach((function(t) {
							ot.releaseProgram(t)
						})), t.isShaderMaterial && ot.releaseShaderCache(t))
					})(t), tt.remove(t)
				}(e)
		}
		this.xr = wt, this.getContext = function() {
			return Mt
		}, this.getContextAttributes = function() {
			return Mt.getContextAttributes()
		}, this.forceContextLoss = function() {
			const t = J.get("WEBGL_lose_context");
			t && t.loseContext()
		}, this.forceContextRestore = function() {
			const t = J.get("WEBGL_lose_context");
			t && t.restoreContext()
		}, this.getPixelRatio = function() {
			return O
		}, this.setPixelRatio = function(t) {
			void 0 !== t && (O = t, this.setSize(P, D, !1))
		}, this.getSize = function(t) {
			return t.set(P, D)
		}, this.setSize = function(t, n, i) {
			wt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (P = t, D = n, e.width = Math.floor(t * O), e.height = Math.floor(n * O), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
		}, this.getDrawingBufferSize = function(t) {
			return t.set(P * O, D * O)
				.floor()
		}, this.setDrawingBufferSize = function(t, n, i) {
			P = t, D = n, O = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
		}, this.getCurrentViewport = function(t) {
			return t.copy(R)
		}, this.getViewport = function(t) {
			return t.copy(U)
		}, this.setViewport = function(t, e, n, i) {
			t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i), Q.viewport(R.copy(U)
				.multiplyScalar(O)
				.floor())
		}, this.getScissor = function(t) {
			return t.copy(F)
		}, this.setScissor = function(t, e, n, i) {
			t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), Q.scissor(C.copy(F)
				.multiplyScalar(O)
				.floor())
		}, this.getScissorTest = function() {
			return B
		}, this.setScissorTest = function(t) {
			Q.setScissorTest(B = t)
		}, this.setOpaqueSort = function(t) {
			N = t
		}, this.setTransparentSort = function(t) {
			I = t
		}, this.getClearColor = function(t) {
			return t.copy(pt.getClearColor())
		}, this.setClearColor = function() {
			pt.setClearColor.apply(pt, arguments)
		}, this.getClearAlpha = function() {
			return pt.getClearAlpha()
		}, this.setClearAlpha = function() {
			pt.setClearAlpha.apply(pt, arguments)
		}, this.clear = function(t = !0, e = !0, n = !0) {
			let i = 0;
			t && (i |= Mt.COLOR_BUFFER_BIT), e && (i |= Mt.DEPTH_BUFFER_BIT), n && (i |= Mt.STENCIL_BUFFER_BIT), Mt.clear(i)
		}, this.clearColor = function() {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0)
		}, this.dispose = function() {
			e.removeEventListener("webglcontextlost", Tt, !1), e.removeEventListener("webglcontextrestored", Pt, !1), e.removeEventListener("webglcontextcreationerror", Dt, !1), ct.dispose(), ht.dispose(), tt.dispose(), nt.dispose(), it.dispose(), st.dispose(), yt.dispose(), bt.dispose(), ot.dispose(), wt.dispose(), wt.removeEventListener("sessionstart", It), wt.removeEventListener("sessionend", Ut), W && (W.dispose(), W = null), Ft.stop()
		}, this.renderBufferDirect = function(t, e, n, i, r, a) {
			null === e && (e = Y);
			const s = r.isMesh && r.matrixWorld.determinant() < 0,
				o = function(t, e, n, i, r) {
					!0 !== e.isScene && (e = Y), et.resetTextureUnits();
					const a = e.fog,
						s = i.isMeshStandardMaterial ? e.environment : null,
						o = null === w ? y.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : E,
						l = (i.isMeshStandardMaterial ? it : nt)
						.get(i.envMap || s),
						c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
						h = !!i.normalMap && !!n.attributes.tangent,
						u = !!n.morphAttributes.position,
						d = !!n.morphAttributes.normal,
						p = !!n.morphAttributes.color,
						f = i.toneMapped ? y.toneMapping : 0,
						m = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
						_ = void 0 !== m ? m.length : 0,
						v = tt.get(i),
						x = g.state.lights;
					if (!0 === k && (!0 === V || t !== A)) {
						const e = t === A && i.id === T;
						ut.setState(i, t, e)
					}
					let b = !1;
					i.version === v.__version ? v.needsLights && v.lightsStateVersion !== x.state.version || v.outputEncoding !== o || r.isInstancedMesh && !1 === v.instancing ? b = !0 : r.isInstancedMesh || !0 !== v.instancing ? r.isSkinnedMesh && !1 === v.skinning ? b = !0 : r.isSkinnedMesh || !0 !== v.skinning ? v.envMap !== l || !0 === i.fog && v.fog !== a ? b = !0 : void 0 === v.numClippingPlanes || v.numClippingPlanes === ut.numPlanes && v.numIntersection === ut.numIntersection ? (v.vertexAlphas !== c || v.vertexTangents !== h || v.morphTargets !== u || v.morphNormals !== d || v.morphColors !== p || v.toneMapping !== f || !0 === K.isWebGL2 && v.morphTargetsCount !== _) && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = i.version);
					let M = v.currentProgram;
					!0 === b && (M = Gt(i, e, r));
					let S = !1,
						R = !1,
						C = !1;
					const L = M.getUniforms(),
						P = v.uniforms;
					if (Q.useProgram(M.program) && (S = !0, R = !0, C = !0), i.id !== T && (T = i.id, R = !0), S || A !== t) {
						if (L.setValue(Mt, "projectionMatrix", t.projectionMatrix), K.logarithmicDepthBuffer && L.setValue(Mt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), A !== t && (A = t, R = !0, C = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
							const e = L.map.cameraPosition;
							void 0 !== e && e.setValue(Mt, q.setFromMatrixPosition(t.matrixWorld))
						}(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && L.setValue(Mt, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && L.setValue(Mt, "viewMatrix", t.matrixWorldInverse)
					}
					if (r.isSkinnedMesh) {
						L.setOptional(Mt, r, "bindMatrix"), L.setOptional(Mt, r, "bindMatrixInverse");
						const t = r.skeleton;
						t && (K.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), L.setValue(Mt, "boneTexture", t.boneTexture, et), L.setValue(Mt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
					}
					const N = n.morphAttributes;
					var I, U;
					if ((void 0 !== N.position || void 0 !== N.normal || void 0 !== N.color && !0 === K.isWebGL2) && ft.update(r, n, i, M), (R || v.receiveShadow !== r.receiveShadow) && (v.receiveShadow = r.receiveShadow, L.setValue(Mt, "receiveShadow", r.receiveShadow)), i.isMeshGouraudMaterial && null !== i.envMap && (P.envMap.value = l, P.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1), R && (L.setValue(Mt, "toneMappingExposure", y.toneMappingExposure), v.needsLights && (U = C, (I = P)
						.ambientLightColor.needsUpdate = U, I.lightProbe.needsUpdate = U, I.directionalLights.needsUpdate = U, I.directionalLightShadows.needsUpdate = U, I.pointLights.needsUpdate = U, I.pointLightShadows.needsUpdate = U, I.spotLights.needsUpdate = U, I.spotLightShadows.needsUpdate = U, I.rectAreaLights.needsUpdate = U, I.hemisphereLights.needsUpdate = U), a && !0 === i.fog && lt.refreshFogUniforms(P, a), lt.refreshMaterialUniforms(P, i, O, D, W), dr.upload(Mt, v.uniformsList, P, et)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (dr.upload(Mt, v.uniformsList, P, et), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && L.setValue(Mt, "center", r.center), L.setValue(Mt, "modelViewMatrix", r.modelViewMatrix), L.setValue(Mt, "normalMatrix", r.normalMatrix), L.setValue(Mt, "modelMatrix", r.matrixWorld), i.isShaderMaterial || i.isRawShaderMaterial) {
						const t = i.uniformsGroups;
						for (let e = 0, n = t.length; e < n; e++)
							if (K.isWebGL2) {
								const n = t[e];
								bt.update(n, M), bt.bind(n, M)
							} else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
					}
					return M
				}(t, e, n, i, r);
			Q.setMaterial(i, s);
			let l = n.index;
			const c = n.attributes.position;
			if (null === l) {
				if (void 0 === c || 0 === c.count) return
			} else if (0 === l.count) return;
			let h, u = 1;
			!0 === i.wireframe && (l = at.getWireframeAttribute(n), u = 2), yt.setup(r, i, o, n, l);
			let d = mt;
			null !== l && (h = rt.get(l), d = gt, d.setIndex(h));
			const p = null !== l ? l.count : c.count,
				f = n.drawRange.start * u,
				m = n.drawRange.count * u,
				_ = null !== a ? a.start * u : 0,
				v = null !== a ? a.count * u : 1 / 0,
				x = Math.max(f, _),
				b = Math.min(p, f + m, _ + v) - 1,
				M = Math.max(0, b - x + 1);
			if (0 !== M) {
				if (r.isMesh) !0 === i.wireframe ? (Q.setLineWidth(i.wireframeLinewidth * Z()), d.setMode(Mt.LINES)) : d.setMode(Mt.TRIANGLES);
				else if (r.isLine) {
					let t = i.linewidth;
					void 0 === t && (t = 1), Q.setLineWidth(t * Z()), r.isLineSegments ? d.setMode(Mt.LINES) : r.isLineLoop ? d.setMode(Mt.LINE_LOOP) : d.setMode(Mt.LINE_STRIP)
				} else r.isPoints ? d.setMode(Mt.POINTS) : r.isSprite && d.setMode(Mt.TRIANGLES);
				if (r.isInstancedMesh) d.renderInstances(x, M, r.count);
				else if (n.isInstancedBufferGeometry) {
					const t = Math.min(n.instanceCount, n._maxInstanceCount);
					d.renderInstances(x, M, t)
				} else d.render(x, M)
			}
		}, this.compile = function(t, e) {
			function n(t, e, n) {
				!0 === t.transparent && 2 === t.side ? (t.side = 1, t.needsUpdate = !0, Gt(t, e, n), t.side = 0, t.needsUpdate = !0, Gt(t, e, n), t.side = 2) : Gt(t, e, n)
			}
			g = ht.get(t), g.init(), x.push(g), t.traverseVisible((function(t) {
				t.isLight && t.layers.test(e.layers) && (g.pushLight(t), t.castShadow && g.pushShadow(t))
			})), g.setupLights(y.physicallyCorrectLights), t.traverse((function(e) {
				const i = e.material;
				if (i)
					if (Array.isArray(i))
						for (let r = 0; r < i.length; r++) n(i[r], t, e);
					else n(i, t, e)
			})), x.pop(), g = null
		};
		let Nt = null;

		function It() {
			Ft.stop()
		}

		function Ut() {
			Ft.start()
		}
		const Ft = new Ct;

		function zt(t, e, n, i) {
			if (!1 === t.visible) return;
			if (t.layers.test(e.layers))
				if (t.isGroup) n = t.renderOrder;
				else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
			else if (t.isLight) g.pushLight(t), t.castShadow && g.pushShadow(t);
			else if (t.isSprite) {
				if (!t.frustumCulled || H.intersectsSprite(t)) {
					i && q.setFromMatrixPosition(t.matrixWorld)
						.applyMatrix4(X);
					const e = st.update(t),
						r = t.material;
					r.visible && p.push(t, e, r, n, q.z, null)
				}
			} else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== $.render.frame && (t.skeleton.update(), t.skeleton.frame = $.render.frame), !t.frustumCulled || H.intersectsObject(t))) {
				i && q.setFromMatrixPosition(t.matrixWorld)
					.applyMatrix4(X);
				const e = st.update(t),
					r = t.material;
				if (Array.isArray(r)) {
					const i = e.groups;
					for (let a = 0, s = i.length; a < s; a++) {
						const s = i[a],
							o = r[s.materialIndex];
						o && o.visible && p.push(t, e, o, n, q.z, s)
					}
				} else r.visible && p.push(t, e, r, n, q.z, null)
			}
			const r = t.children;
			for (let t = 0, a = r.length; t < a; t++) zt(r[t], e, n, i)
		}

		function Bt(t, e, n, i) {
			const r = t.opaque,
				s = t.transmissive,
				o = t.transparent;
			g.setupLightsView(n), s.length > 0 && function(t, e, n) {
				const i = K.isWebGL2;
				null === W && (W = new Pn(1, 1, {
					generateMipmaps: !0,
					type: J.has("EXT_color_buffer_half_float") ? m : d,
					minFilter: u,
					samples: i && !0 === a ? 4 : 0
				})), y.getDrawingBufferSize(j), i ? W.setSize(j.x, j.y) : W.setSize(z(j.x), z(j.y));
				const r = y.getRenderTarget();
				y.setRenderTarget(W), y.clear();
				const s = y.toneMapping;
				y.toneMapping = 0, Ht(t, e, n), y.toneMapping = s, et.updateMultisampleRenderTarget(W), et.updateRenderTargetMipmap(W), y.setRenderTarget(r)
			}(r, e, n), i && Q.viewport(R.copy(i)), r.length > 0 && Ht(r, e, n), s.length > 0 && Ht(s, e, n), o.length > 0 && Ht(o, e, n), Q.buffers.depth.setTest(!0), Q.buffers.depth.setMask(!0), Q.buffers.color.setMask(!0), Q.setPolygonOffset(!1)
		}

		function Ht(t, e, n) {
			const i = !0 === e.isScene ? e.overrideMaterial : null;
			for (let r = 0, a = t.length; r < a; r++) {
				const a = t[r],
					s = a.object,
					o = a.geometry,
					l = null === i ? a.material : i,
					c = a.group;
				s.layers.test(n.layers) && kt(s, e, n, o, l, c)
			}
		}

		function kt(t, e, n, i, r, a) {
			t.onBeforeRender(y, e, n, i, r, a), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(y, e, n, i, t, a), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, y.renderBufferDirect(n, e, i, r, t, a), r.side = 0, r.needsUpdate = !0, y.renderBufferDirect(n, e, i, r, t, a), r.side = 2) : y.renderBufferDirect(n, e, i, r, t, a), t.onAfterRender(y, e, n, i, r, a)
		}

		function Gt(t, e, n) {
			!0 !== e.isScene && (e = Y);
			const i = tt.get(t),
				r = g.state.lights,
				a = g.state.shadowsArray,
				s = r.state.version,
				o = ot.getParameters(t, r.state, a, e, n),
				l = ot.getProgramCacheKey(o);
			let c = i.programs;
			i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? it : nt)
				.get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Ot), c = new Map, i.programs = c);
			let h = c.get(l);
			if (void 0 !== h) {
				if (i.currentProgram === h && i.lightsStateVersion === s) return Vt(t, o), h
			} else o.uniforms = ot.getUniforms(t), t.onBuild(n, o, y), t.onBeforeCompile(o, y), h = ot.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
			const u = i.uniforms;
			(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ut.uniform), Vt(t, o), i.needsLights = function(t) {
				return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
			}(t), i.lightsStateVersion = s, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
			const d = h.getUniforms(),
				p = dr.seqWithValue(d.seq, u);
			return i.currentProgram = h, i.uniformsList = p, h
		}

		function Vt(t, e) {
			const n = tt.get(t);
			n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping
		}
		Ft.setAnimationLoop((function(t) {
			Nt && Nt(t)
		})), "undefined" != typeof self && Ft.setContext(self), this.setAnimationLoop = function(t) {
			Nt = t, wt.setAnimationLoop(t), null === t ? Ft.stop() : Ft.start()
		}, wt.addEventListener("sessionstart", It), wt.addEventListener("sessionend", Ut), this.render = function(t, e) {
			if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			if (!0 === b) return;
			!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === wt.enabled && !0 === wt.isPresenting && (!0 === wt.cameraAutoUpdate && wt.updateCamera(e), e = wt.getCamera()), !0 === t.isScene && t.onBeforeRender(y, t, e, w), g = ht.get(t, x.length), g.init(), x.push(g), X.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), H.setFromProjectionMatrix(X), V = this.localClippingEnabled, k = ut.init(this.clippingPlanes, V, e), p = ct.get(t, v.length), p.init(), v.push(p), zt(t, e, 0, y.sortObjects), p.finish(), !0 === y.sortObjects && p.sort(N, I), !0 === k && ut.beginShadows();
			const n = g.state.shadowsArray;
			if (dt.render(n, t, e), !0 === k && ut.endShadows(), !0 === this.info.autoReset && this.info.reset(), pt.render(p, t), g.setupLights(y.physicallyCorrectLights), e.isArrayCamera) {
				const n = e.cameras;
				for (let e = 0, i = n.length; e < i; e++) {
					const i = n[e];
					Bt(p, t, i, i.viewport)
				}
			} else Bt(p, t, e);
			null !== w && (et.updateMultisampleRenderTarget(w), et.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(y, t, e), yt.resetDefaultState(), T = -1, A = null, x.pop(), g = x.length > 0 ? x[x.length - 1] : null, v.pop(), p = v.length > 0 ? v[v.length - 1] : null
		}, this.getActiveCubeFace = function() {
			return M
		}, this.getActiveMipmapLevel = function() {
			return S
		}, this.getRenderTarget = function() {
			return w
		}, this.setRenderTargetTextures = function(t, e, n) {
			tt.get(t.texture)
				.__webglTexture = e, tt.get(t.depthTexture)
				.__webglTexture = n;
			const i = tt.get(t);
			i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === J.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1))
		}, this.setRenderTargetFramebuffer = function(t, e) {
			const n = tt.get(t);
			n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e
		}, this.setRenderTarget = function(t, e = 0, n = 0) {
			w = t, M = e, S = n;
			let i = !0;
			if (t) {
				const e = tt.get(t);
				void 0 !== e.__useDefaultFramebuffer ? (Q.bindFramebuffer(Mt.FRAMEBUFFER, null), i = !1) : void 0 === e.__webglFramebuffer ? et.setupRenderTarget(t) : e.__hasExternalTextures && et.rebindTextures(t, tt.get(t.texture)
					.__webglTexture, tt.get(t.depthTexture)
					.__webglTexture)
			}
			let r = null,
				a = !1,
				s = !1;
			if (t) {
				const n = t.texture;
				(n.isData3DTexture || n.isDataArrayTexture) && (s = !0);
				const i = tt.get(t)
					.__webglFramebuffer;
				t.isWebGLCubeRenderTarget ? (r = i[e], a = !0) : r = K.isWebGL2 && t.samples > 0 && !1 === et.useMultisampledRTT(t) ? tt.get(t)
					.__webglMultisampledFramebuffer : i, R.copy(t.viewport), C.copy(t.scissor), L = t.scissorTest
			} else R.copy(U)
				.multiplyScalar(O)
				.floor(), C.copy(F)
				.multiplyScalar(O)
				.floor(), L = B;
			if (Q.bindFramebuffer(Mt.FRAMEBUFFER, r) && K.drawBuffers && i && Q.drawBuffers(t, r), Q.viewport(R), Q.scissor(C), Q.setScissorTest(L), a) {
				const i = tt.get(t.texture);
				Mt.framebufferTexture2D(Mt.FRAMEBUFFER, Mt.COLOR_ATTACHMENT0, Mt.TEXTURE_CUBE_MAP_POSITIVE_X + e, i.__webglTexture, n)
			} else if (s) {
				const i = tt.get(t.texture),
					r = e || 0;
				Mt.framebufferTextureLayer(Mt.FRAMEBUFFER, Mt.COLOR_ATTACHMENT0, i.__webglTexture, n || 0, r)
			}
			T = -1
		}, this.readRenderTargetPixels = function(t, e, n, i, r, a, s) {
			if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let o = tt.get(t)
				.__webglFramebuffer;
			if (t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o) {
				Q.bindFramebuffer(Mt.FRAMEBUFFER, o);
				try {
					const s = t.texture,
						o = s.format,
						l = s.type;
					if (o !== _ && _t.convert(o) !== Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					const c = l === m && (J.has("EXT_color_buffer_half_float") || K.isWebGL2 && J.has("EXT_color_buffer_float"));
					if (!(l === d || _t.convert(l) === Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_TYPE) || l === f && (K.isWebGL2 || J.has("OES_texture_float") || J.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && Mt.readPixels(e, n, i, r, _t.convert(o), _t.convert(l), a)
				} finally {
					const t = null !== w ? tt.get(w)
						.__webglFramebuffer : null;
					Q.bindFramebuffer(Mt.FRAMEBUFFER, t)
				}
			}
		}, this.copyFramebufferToTexture = function(t, e, n = 0) {
			const i = Math.pow(2, -n),
				r = Math.floor(e.image.width * i),
				a = Math.floor(e.image.height * i);
			et.setTexture2D(e, 0), Mt.copyTexSubImage2D(Mt.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a), Q.unbindTexture()
		}, this.copyTextureToTexture = function(t, e, n, i = 0) {
			const r = e.image.width,
				a = e.image.height,
				s = _t.convert(n.format),
				o = _t.convert(n.type);
			et.setTexture2D(n, 0), Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL, n.flipY), Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), Mt.pixelStorei(Mt.UNPACK_ALIGNMENT, n.unpackAlignment), e.isDataTexture ? Mt.texSubImage2D(Mt.TEXTURE_2D, i, t.x, t.y, r, a, s, o, e.image.data) : e.isCompressedTexture ? Mt.compressedTexSubImage2D(Mt.TEXTURE_2D, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data) : Mt.texSubImage2D(Mt.TEXTURE_2D, i, t.x, t.y, s, o, e.image), 0 === i && n.generateMipmaps && Mt.generateMipmap(Mt.TEXTURE_2D), Q.unbindTexture()
		}, this.copyTextureToTexture3D = function(t, e, n, i, r = 0) {
			if (y.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
			const a = t.max.x - t.min.x + 1,
				s = t.max.y - t.min.y + 1,
				o = t.max.z - t.min.z + 1,
				l = _t.convert(i.format),
				c = _t.convert(i.type);
			let h;
			if (i.isData3DTexture) et.setTexture3D(i, 0), h = Mt.TEXTURE_3D;
			else {
				if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
				et.setTexture2DArray(i, 0), h = Mt.TEXTURE_2D_ARRAY
			}
			Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL, i.flipY), Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), Mt.pixelStorei(Mt.UNPACK_ALIGNMENT, i.unpackAlignment);
			const u = Mt.getParameter(Mt.UNPACK_ROW_LENGTH),
				d = Mt.getParameter(Mt.UNPACK_IMAGE_HEIGHT),
				p = Mt.getParameter(Mt.UNPACK_SKIP_PIXELS),
				f = Mt.getParameter(Mt.UNPACK_SKIP_ROWS),
				m = Mt.getParameter(Mt.UNPACK_SKIP_IMAGES),
				g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
			Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, g.width), Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, g.height), Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, t.min.x), Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, t.min.y), Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, t.min.z), n.isDataTexture || n.isData3DTexture ? Mt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Mt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, g.data)) : Mt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g), Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, u), Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, d), Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, p), Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, f), Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, m), 0 === r && i.generateMipmaps && Mt.generateMipmap(h), Q.unbindTexture()
		}, this.initTexture = function(t) {
			t.isCubeTexture ? et.setTextureCube(t, 0) : t.isData3DTexture ? et.setTexture3D(t, 0) : t.isDataArrayTexture ? et.setTexture2DArray(t, 0) : et.setTexture2D(t, 0), Q.unbindTexture()
		}, this.resetState = function() {
			M = 0, S = 0, w = null, Q.reset(), yt.reset()
		}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
			detail: this
		}))
	}
	class aa extends ee {
		constructor() {
			super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
				detail: this
			}))
		}
		copy(t, e) {
			return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return null !== this.fog && (e.object.fog = this.fog.toJSON()), e
		}
		get autoUpdate() {
			return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate
		}
		set autoUpdate(t) {
			console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t
		}
	}
	class sa extends me {
		constructor(t) {
			super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Le(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t)
		}
		copy(t) {
			return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
		}
	}
	const oa = new xt,
		la = new ze,
		ca = new ht,
		ha = new G;
	class ua extends ee {
		constructor(t = new ue, e = new sa) {
			super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
		}
		copy(t, e) {
			return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
		}
		raycast(t, e) {
			const n = this.geometry,
				i = this.matrixWorld,
				r = t.params.Points.threshold,
				a = n.drawRange;
			if (null === n.boundingSphere && n.computeBoundingSphere(), ca.copy(n.boundingSphere), ca.applyMatrix4(i), ca.radius += r, !1 === t.ray.intersectsSphere(ca)) return;
			oa.copy(i)
				.invert(), la.copy(t.ray)
				.applyMatrix4(oa);
			const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				o = s * s,
				l = n.index,
				c = n.attributes.position;
			if (null !== l)
				for (let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count); n < r; n++) {
					const r = l.getX(n);
					ha.fromBufferAttribute(c, r), da(ha, r, o, i, t, e, this)
				} else
					for (let n = Math.max(0, a.start), r = Math.min(c.count, a.start + a.count); n < r; n++) ha.fromBufferAttribute(c, n), da(ha, n, o, i, t, e, this)
		}
		updateMorphTargets() {
			const t = this.geometry.morphAttributes,
				e = Object.keys(t);
			if (e.length > 0) {
				const n = t[e[0]];
				if (void 0 !== n) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let t = 0, e = n.length; t < e; t++) {
						const e = n[t].name || String(t);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
					}
				}
			}
		}
	}

	function da(t, e, n, i, r, a, s) {
		const o = la.distanceSqToPoint(t);
		if (o < n) {
			const n = new G;
			la.closestPointToPoint(t, n), n.applyMatrix4(i);
			const l = r.ray.origin.distanceTo(n);
			if (l < r.near || l > r.far) return;
			a.push({
				distance: l,
				distanceToRay: Math.sqrt(o),
				point: n,
				index: e,
				face: null,
				object: s
			})
		}
	}
	class pa {
		constructor() {
			this.type = "Curve", this.arcLengthDivisions = 200
		}
		getPoint() {
			return console.warn("THREE.Curve: .getPoint() not implemented."), null
		}
		getPointAt(t, e) {
			const n = this.getUtoTmapping(t);
			return this.getPoint(n, e)
		}
		getPoints(t = 5) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return e
		}
		getSpacedPoints(t = 5) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
			return e
		}
		getLength() {
			const t = this.getLengths();
			return t[t.length - 1]
		}
		getLengths(t = this.arcLengthDivisions) {
			if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			const e = [];
			let n, i = this.getPoint(0),
				r = 0;
			e.push(0);
			for (let a = 1; a <= t; a++) n = this.getPoint(a / t), r += n.distanceTo(i), e.push(r), i = n;
			return this.cacheArcLengths = e, e
		}
		updateArcLengths() {
			this.needsUpdate = !0, this.getLengths()
		}
		getUtoTmapping(t, e) {
			const n = this.getLengths();
			let i = 0;
			const r = n.length;
			let a;
			a = e || t * n[r - 1];
			let s, o = 0,
				l = r - 1;
			for (; o <= l;)
				if (i = Math.floor(o + (l - o) / 2), s = n[i] - a, s < 0) o = i + 1;
				else {
					if (!(s > 0)) {
						l = i;
						break
					}
					l = i - 1
				} if (i = l, n[i] === a) return i / (r - 1);
			const c = n[i];
			return (i + (a - c) / (n[i + 1] - c)) / (r - 1)
		}
		getTangent(t, e) {
			const n = 1e-4;
			let i = t - n,
				r = t + n;
			i < 0 && (i = 0), r > 1 && (r = 1);
			const a = this.getPoint(i),
				s = this.getPoint(r),
				o = e || (a.isVector2 ? new At : new G);
			return o.copy(s)
				.sub(a)
				.normalize(), o
		}
		getTangentAt(t, e) {
			const n = this.getUtoTmapping(t);
			return this.getTangent(n, e)
		}
		computeFrenetFrames(t, e) {
			const n = new G,
				i = [],
				r = [],
				a = [],
				s = new G,
				o = new xt;
			for (let e = 0; e <= t; e++) {
				const n = e / t;
				i[e] = this.getTangentAt(n, new G)
			}
			r[0] = new G, a[0] = new G;
			let l = Number.MAX_VALUE;
			const c = Math.abs(i[0].x),
				h = Math.abs(i[0].y),
				u = Math.abs(i[0].z);
			c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), s.crossVectors(i[0], n)
				.normalize(), r[0].crossVectors(i[0], s), a[0].crossVectors(i[0], r[0]);
			for (let e = 1; e <= t; e++) {
				if (r[e] = r[e - 1].clone(), a[e] = a[e - 1].clone(), s.crossVectors(i[e - 1], i[e]), s.length() > Number.EPSILON) {
					s.normalize();
					const t = Math.acos(I(i[e - 1].dot(i[e]), -1, 1));
					r[e].applyMatrix4(o.makeRotationAxis(s, t))
				}
				a[e].crossVectors(i[e], r[e])
			}
			if (!0 === e) {
				let e = Math.acos(I(r[0].dot(r[t]), -1, 1));
				e /= t, i[0].dot(s.crossVectors(r[0], r[t])) > 0 && (e = -e);
				for (let n = 1; n <= t; n++) r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), a[n].crossVectors(i[n], r[n])
			}
			return {
				tangents: i,
				normals: r,
				binormals: a
			}
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
		copy(t) {
			return this.arcLengthDivisions = t.arcLengthDivisions, this
		}
		toJSON() {
			const t = {
				metadata: {
					version: 4.5,
					type: "Curve",
					generator: "Curve.toJSON"
				}
			};
			return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
		}
		fromJSON(t) {
			return this.arcLengthDivisions = t.arcLengthDivisions, this
		}
	}
	class fa extends pa {
		constructor(t = 0, e = 0, n = 1, i = 1, r = 0, a = 2 * Math.PI, s = !1, o = 0) {
			super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = s, this.aRotation = o
		}
		getPoint(t, e) {
			const n = e || new At,
				i = 2 * Math.PI;
			let r = this.aEndAngle - this.aStartAngle;
			const a = Math.abs(r) < Number.EPSILON;
			for (; r < 0;) r += i;
			for (; r > i;) r -= i;
			r < Number.EPSILON && (r = a ? 0 : i), !0 !== this.aClockwise || a || (r === i ? r = -i : r -= i);
			const s = this.aStartAngle + t * r;
			let o = this.aX + this.xRadius * Math.cos(s),
				l = this.aY + this.yRadius * Math.sin(s);
			if (0 !== this.aRotation) {
				const t = Math.cos(this.aRotation),
					e = Math.sin(this.aRotation),
					n = o - this.aX,
					i = l - this.aY;
				o = n * t - i * e + this.aX, l = n * e + i * t + this.aY
			}
			return n.set(o, l)
		}
		copy(t) {
			return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
		}
		toJSON() {
			const t = super.toJSON();
			return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
		}
	}
	class ma extends fa {
		constructor(t, e, n, i, r, a) {
			super(t, e, n, n, i, r, a), this.isArcCurve = !0, this.type = "ArcCurve"
		}
	}

	function ga() {
		let t = 0,
			e = 0,
			n = 0,
			i = 0;

		function r(r, a, s, o) {
			t = r, e = s, n = -3 * r + 3 * a - 2 * s - o, i = 2 * r - 2 * a + s + o
		}
		return {
			initCatmullRom: function(t, e, n, i, a) {
				r(e, n, a * (n - t), a * (i - e))
			},
			initNonuniformCatmullRom: function(t, e, n, i, a, s, o) {
				let l = (e - t) / a - (n - t) / (a + s) + (n - e) / s,
					c = (n - e) / s - (i - e) / (s + o) + (i - n) / o;
				l *= s, c *= s, r(e, n, l, c)
			},
			calc: function(r) {
				const a = r * r;
				return t + e * r + n * a + i * (a * r)
			}
		}
	}
	const _a = new G,
		va = new ga,
		xa = new ga,
		ya = new ga;
	class ba extends pa {
		constructor(t = [], e = !1, n = "centripetal", i = .5) {
			super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i
		}
		getPoint(t, e = new G) {
			const n = e,
				i = this.points,
				r = i.length,
				a = (r - (this.closed ? 0 : 1)) * t;
			let s, o, l = Math.floor(a),
				c = a - l;
			this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? s = i[(l - 1) % r] : (_a.subVectors(i[0], i[1])
				.add(i[0]), s = _a);
			const h = i[l % r],
				u = i[(l + 1) % r];
			if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (_a.subVectors(i[r - 1], i[r - 2])
				.add(i[r - 1]), o = _a), "centripetal" === this.curveType || "chordal" === this.curveType) {
				const t = "chordal" === this.curveType ? .5 : .25;
				let e = Math.pow(s.distanceToSquared(h), t),
					n = Math.pow(h.distanceToSquared(u), t),
					i = Math.pow(u.distanceToSquared(o), t);
				n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), va.initNonuniformCatmullRom(s.x, h.x, u.x, o.x, e, n, i), xa.initNonuniformCatmullRom(s.y, h.y, u.y, o.y, e, n, i), ya.initNonuniformCatmullRom(s.z, h.z, u.z, o.z, e, n, i)
			} else "catmullrom" === this.curveType && (va.initCatmullRom(s.x, h.x, u.x, o.x, this.tension), xa.initCatmullRom(s.y, h.y, u.y, o.y, this.tension), ya.initCatmullRom(s.z, h.z, u.z, o.z, this.tension));
			return n.set(va.calc(c), xa.calc(c), ya.calc(c)), n
		}
		copy(t) {
			super.copy(t), this.points = [];
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push(n.clone())
			}
			return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
		}
		toJSON() {
			const t = super.toJSON();
			t.points = [];
			for (let e = 0, n = this.points.length; e < n; e++) {
				const n = this.points[e];
				t.points.push(n.toArray())
			}
			return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
		}
		fromJSON(t) {
			super.fromJSON(t), this.points = [];
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push((new G)
					.fromArray(n))
			}
			return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
		}
	}

	function Ma(t, e, n, i, r) {
		const a = .5 * (i - e),
			s = .5 * (r - n),
			o = t * t;
		return (2 * n - 2 * i + a + s) * (t * o) + (-3 * n + 3 * i - 2 * a - s) * o + a * t + n
	}

	function Sa(t, e, n, i) {
		return function(t, e) {
			const n = 1 - t;
			return n * n * e
		}(t, e) + function(t, e) {
			return 2 * (1 - t) * t * e
		}(t, n) + function(t, e) {
			return t * t * e
		}(t, i)
	}

	function Ea(t, e, n, i, r) {
		return function(t, e) {
			const n = 1 - t;
			return n * n * n * e
		}(t, e) + function(t, e) {
			const n = 1 - t;
			return 3 * n * n * t * e
		}(t, n) + function(t, e) {
			return 3 * (1 - t) * t * t * e
		}(t, i) + function(t, e) {
			return t * t * t * e
		}(t, r)
	}
	class wa extends pa {
		constructor(t = new At, e = new At, n = new At, i = new At) {
			super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
		}
		getPoint(t, e = new At) {
			const n = e,
				i = this.v0,
				r = this.v1,
				a = this.v2,
				s = this.v3;
			return n.set(Ea(t, i.x, r.x, a.x, s.x), Ea(t, i.y, r.y, a.y, s.y)), n
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
		}
	}
	class Ta extends pa {
		constructor(t = new G, e = new G, n = new G, i = new G) {
			super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
		}
		getPoint(t, e = new G) {
			const n = e,
				i = this.v0,
				r = this.v1,
				a = this.v2,
				s = this.v3;
			return n.set(Ea(t, i.x, r.x, a.x, s.x), Ea(t, i.y, r.y, a.y, s.y), Ea(t, i.z, r.z, a.z, s.z)), n
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
		}
	}
	class Aa extends pa {
		constructor(t = new At, e = new At) {
			super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e
		}
		getPoint(t, e = new At) {
			const n = e;
			return 1 === t ? n.copy(this.v2) : (n.copy(this.v2)
				.sub(this.v1), n.multiplyScalar(t)
				.add(this.v1)), n
		}
		getPointAt(t, e) {
			return this.getPoint(t, e)
		}
		getTangent(t, e) {
			const n = e || new At;
			return n.copy(this.v2)
				.sub(this.v1)
				.normalize(), n
		}
		copy(t) {
			return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}
	}
	class Ra extends pa {
		constructor(t = new G, e = new G) {
			super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e
		}
		getPoint(t, e = new G) {
			const n = e;
			return 1 === t ? n.copy(this.v2) : (n.copy(this.v2)
				.sub(this.v1), n.multiplyScalar(t)
				.add(this.v1)), n
		}
		getPointAt(t, e) {
			return this.getPoint(t, e)
		}
		copy(t) {
			return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}
	}
	class Ca extends pa {
		constructor(t = new At, e = new At, n = new At) {
			super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n
		}
		getPoint(t, e = new At) {
			const n = e,
				i = this.v0,
				r = this.v1,
				a = this.v2;
			return n.set(Sa(t, i.x, r.x, a.x), Sa(t, i.y, r.y, a.y)), n
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}
	}
	class La extends pa {
		constructor(t = new G, e = new G, n = new G) {
			super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n
		}
		getPoint(t, e = new G) {
			const n = e,
				i = this.v0,
				r = this.v1,
				a = this.v2;
			return n.set(Sa(t, i.x, r.x, a.x), Sa(t, i.y, r.y, a.y), Sa(t, i.z, r.z, a.z)), n
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}
	}
	class Pa extends pa {
		constructor(t = []) {
			super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t
		}
		getPoint(t, e = new At) {
			const n = e,
				i = this.points,
				r = (i.length - 1) * t,
				a = Math.floor(r),
				s = r - a,
				o = i[0 === a ? a : a - 1],
				l = i[a],
				c = i[a > i.length - 2 ? i.length - 1 : a + 1],
				h = i[a > i.length - 3 ? i.length - 1 : a + 2];
			return n.set(Ma(s, o.x, l.x, c.x, h.x), Ma(s, o.y, l.y, c.y, h.y)), n
		}
		copy(t) {
			super.copy(t), this.points = [];
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push(n.clone())
			}
			return this
		}
		toJSON() {
			const t = super.toJSON();
			t.points = [];
			for (let e = 0, n = this.points.length; e < n; e++) {
				const n = this.points[e];
				t.points.push(n.toArray())
			}
			return t
		}
		fromJSON(t) {
			super.fromJSON(t), this.points = [];
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push((new At)
					.fromArray(n))
			}
			return this
		}
	}
	class Da extends pa {
		constructor() {
			super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
		}
		add(t) {
			this.curves.push(t)
		}
		closePath() {
			const t = this.curves[0].getPoint(0),
				e = this.curves[this.curves.length - 1].getPoint(1);
			t.equals(e) || this.curves.push(new Aa(e, t))
		}
		getPoint(t, e) {
			const n = t * this.getLength(),
				i = this.getCurveLengths();
			let r = 0;
			for (; r < i.length;) {
				if (i[r] >= n) {
					const t = i[r] - n,
						a = this.curves[r],
						s = a.getLength(),
						o = 0 === s ? 0 : 1 - t / s;
					return a.getPointAt(o, e)
				}
				r++
			}
			return null
		}
		getLength() {
			const t = this.getCurveLengths();
			return t[t.length - 1]
		}
		updateArcLengths() {
			this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
		}
		getCurveLengths() {
			if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
			const t = [];
			let e = 0;
			for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
			return this.cacheLengths = t, t
		}
		getSpacedPoints(t = 40) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return this.autoClose && e.push(e[0]), e
		}
		getPoints(t = 12) {
			const e = [];
			let n;
			for (let i = 0, r = this.curves; i < r.length; i++) {
				const a = r[i],
					s = a.isEllipseCurve ? 2 * t : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t,
					o = a.getPoints(s);
				for (let t = 0; t < o.length; t++) {
					const i = o[t];
					n && n.equals(i) || (e.push(i), n = i)
				}
			}
			return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
		}
		copy(t) {
			super.copy(t), this.curves = [];
			for (let e = 0, n = t.curves.length; e < n; e++) {
				const n = t.curves[e];
				this.curves.push(n.clone())
			}
			return this.autoClose = t.autoClose, this
		}
		toJSON() {
			const t = super.toJSON();
			t.autoClose = this.autoClose, t.curves = [];
			for (let e = 0, n = this.curves.length; e < n; e++) {
				const n = this.curves[e];
				t.curves.push(n.toJSON())
			}
			return t
		}
		fromJSON(t) {
			super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
			for (let n = 0, i = t.curves.length; n < i; n++) {
				const i = t.curves[n];
				this.curves.push((new e[i.type])
					.fromJSON(i))
			}
			return this
		}
	}
	class Oa extends Da {
		constructor(t) {
			super(), this.type = "Path", this.currentPoint = new At, t && this.setFromPoints(t)
		}
		setFromPoints(t) {
			this.moveTo(t[0].x, t[0].y);
			for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
			return this
		}
		moveTo(t, e) {
			return this.currentPoint.set(t, e), this
		}
		lineTo(t, e) {
			const n = new Aa(this.currentPoint.clone(), new At(t, e));
			return this.curves.push(n), this.currentPoint.set(t, e), this
		}
		quadraticCurveTo(t, e, n, i) {
			const r = new Ca(this.currentPoint.clone(), new At(t, e), new At(n, i));
			return this.curves.push(r), this.currentPoint.set(n, i), this
		}
		bezierCurveTo(t, e, n, i, r, a) {
			const s = new wa(this.currentPoint.clone(), new At(t, e), new At(n, i), new At(r, a));
			return this.curves.push(s), this.currentPoint.set(r, a), this
		}
		splineThru(t) {
			const e = [this.currentPoint.clone()].concat(t),
				n = new Pa(e);
			return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
		}
		arc(t, e, n, i, r, a) {
			const s = this.currentPoint.x,
				o = this.currentPoint.y;
			return this.absarc(t + s, e + o, n, i, r, a), this
		}
		absarc(t, e, n, i, r, a) {
			return this.absellipse(t, e, n, n, i, r, a), this
		}
		ellipse(t, e, n, i, r, a, s, o) {
			const l = this.currentPoint.x,
				c = this.currentPoint.y;
			return this.absellipse(t + l, e + c, n, i, r, a, s, o), this
		}
		absellipse(t, e, n, i, r, a, s, o) {
			const l = new fa(t, e, n, i, r, a, s, o);
			if (this.curves.length > 0) {
				const t = l.getPoint(0);
				t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
			}
			this.curves.push(l);
			const c = l.getPoint(1);
			return this.currentPoint.copy(c), this
		}
		copy(t) {
			return super.copy(t), this.currentPoint.copy(t.currentPoint), this
		}
		toJSON() {
			const t = super.toJSON();
			return t.currentPoint = this.currentPoint.toArray(), t
		}
		fromJSON(t) {
			return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
		}
	}
	class Na extends Oa {
		constructor(t) {
			super(t), this.uuid = N(), this.type = "Shape", this.holes = []
		}
		getPointsHoles(t) {
			const e = [];
			for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
			return e
		}
		extractPoints(t) {
			return {
				shape: this.getPoints(t),
				holes: this.getPointsHoles(t)
			}
		}
		copy(t) {
			super.copy(t), this.holes = [];
			for (let e = 0, n = t.holes.length; e < n; e++) {
				const n = t.holes[e];
				this.holes.push(n.clone())
			}
			return this
		}
		toJSON() {
			const t = super.toJSON();
			t.uuid = this.uuid, t.holes = [];
			for (let e = 0, n = this.holes.length; e < n; e++) {
				const n = this.holes[e];
				t.holes.push(n.toJSON())
			}
			return t
		}
		fromJSON(t) {
			super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
			for (let e = 0, n = t.holes.length; e < n; e++) {
				const n = t.holes[e];
				this.holes.push((new Oa)
					.fromJSON(n))
			}
			return this
		}
	}

	function Ia(t, e, n, i, r) {
		let a, s;
		if (r === function(t, e, n, i) {
			let r = 0;
			for (let a = e, s = n - i; a < n; a += i) r += (t[s] - t[a]) * (t[a + 1] + t[s + 1]), s = a;
			return r
		}(t, e, n, i) > 0)
			for (a = e; a < n; a += i) s = ns(a, t[a], t[a + 1], s);
		else
			for (a = n - i; a >= e; a -= i) s = ns(a, t[a], t[a + 1], s);
		return s && Ja(s, s.next) && (is(s), s = s.next), s
	}

	function Ua(t, e) {
		if (!t) return t;
		e || (e = t);
		let n, i = t;
		do {
			if (n = !1, i.steiner || !Ja(i, i.next) && 0 !== Za(i.prev, i, i.next)) i = i.next;
			else {
				if (is(i), i = e = i.prev, i === i.next) break;
				n = !0
			}
		} while (n || i !== e);
		return e
	}

	function Fa(t, e, n, i, r, a, s) {
		if (!t) return;
		!s && a && function(t, e, n, i) {
			let r = t;
			do {
				null === r.z && (r.z = Xa(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
			} while (r !== t);
			r.prevZ.nextZ = null, r.prevZ = null,
				function(t) {
					let e, n, i, r, a, s, o, l, c = 1;
					do {
						for (n = t, t = null, a = null, s = 0; n;) {
							for (s++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++);
							for (l = c; o > 0 || l > 0 && i;) 0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
							n = i
						}
						a.nextZ = null, c *= 2
					} while (s > 1)
				}(r)
		}(t, i, r, a);
		let o, l, c = t;
		for (; t.prev !== t.next;)
			if (o = t.prev, l = t.next, a ? Ba(t, i, r, a) : za(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), is(t), t = l.next, c = l.next;
			else if ((t = l) === c) {
			s ? 1 === s ? Fa(t = Ha(Ua(t), e, n), e, n, i, r, a, 2) : 2 === s && ka(t, e, n, i, r, a) : Fa(Ua(t), e, n, i, r, a, 1);
			break
		}
	}

	function za(t) {
		const e = t.prev,
			n = t,
			i = t.next;
		if (Za(e, n, i) >= 0) return !1;
		let r = t.next.next;
		for (; r !== t.prev;) {
			if (qa(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Za(r.prev, r, r.next) >= 0) return !1;
			r = r.next
		}
		return !0
	}

	function Ba(t, e, n, i) {
		const r = t.prev,
			a = t,
			s = t.next;
		if (Za(r, a, s) >= 0) return !1;
		const o = r.x < a.x ? r.x < s.x ? r.x : s.x : a.x < s.x ? a.x : s.x,
			l = r.y < a.y ? r.y < s.y ? r.y : s.y : a.y < s.y ? a.y : s.y,
			c = r.x > a.x ? r.x > s.x ? r.x : s.x : a.x > s.x ? a.x : s.x,
			h = r.y > a.y ? r.y > s.y ? r.y : s.y : a.y > s.y ? a.y : s.y,
			u = Xa(o, l, e, n, i),
			d = Xa(c, h, e, n, i);
		let p = t.prevZ,
			f = t.nextZ;
		for (; p && p.z >= u && f && f.z <= d;) {
			if (p !== t.prev && p !== t.next && qa(r.x, r.y, a.x, a.y, s.x, s.y, p.x, p.y) && Za(p.prev, p, p.next) >= 0) return !1;
			if (p = p.prevZ, f !== t.prev && f !== t.next && qa(r.x, r.y, a.x, a.y, s.x, s.y, f.x, f.y) && Za(f.prev, f, f.next) >= 0) return !1;
			f = f.nextZ
		}
		for (; p && p.z >= u;) {
			if (p !== t.prev && p !== t.next && qa(r.x, r.y, a.x, a.y, s.x, s.y, p.x, p.y) && Za(p.prev, p, p.next) >= 0) return !1;
			p = p.prevZ
		}
		for (; f && f.z <= d;) {
			if (f !== t.prev && f !== t.next && qa(r.x, r.y, a.x, a.y, s.x, s.y, f.x, f.y) && Za(f.prev, f, f.next) >= 0) return !1;
			f = f.nextZ
		}
		return !0
	}

	function Ha(t, e, n) {
		let i = t;
		do {
			const r = i.prev,
				a = i.next.next;
			!Ja(r, a) && Ka(r, i, i.next, a) && ts(r, a) && ts(a, r) && (e.push(r.i / n), e.push(i.i / n), e.push(a.i / n), is(i), is(i.next), i = t = a), i = i.next
		} while (i !== t);
		return Ua(i)
	}

	function ka(t, e, n, i, r, a) {
		let s = t;
		do {
			let t = s.next.next;
			for (; t !== s.prev;) {
				if (s.i !== t.i && Ya(s, t)) {
					let o = es(s, t);
					return s = Ua(s, s.next), o = Ua(o, o.next), Fa(s, e, n, i, r, a), void Fa(o, e, n, i, r, a)
				}
				t = t.next
			}
			s = s.next
		} while (s !== t)
	}

	function Ga(t, e) {
		return t.x - e.x
	}

	function Va(t, e) {
		if (e = function(t, e) {
			let n = e;
			const i = t.x,
				r = t.y;
			let a, s = -1 / 0;
			do {
				if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
					const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
					if (t <= i && t > s) {
						if (s = t, t === i) {
							if (r === n.y) return n;
							if (r === n.next.y) return n.next
						}
						a = n.x < n.next.x ? n : n.next
					}
				}
				n = n.next
			} while (n !== e);
			if (!a) return null;
			if (i === s) return a;
			const o = a,
				l = a.x,
				c = a.y;
			let h, u = 1 / 0;
			n = a;
			do {
				i >= n.x && n.x >= l && i !== n.x && qa(r < c ? i : s, r, l, c, r < c ? s : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), ts(n, t) && (h < u || h === u && (n.x > a.x || n.x === a.x && Wa(a, n))) && (a = n, u = h)), n = n.next
			} while (n !== o);
			return a
		}(t, e), e) {
			const n = es(e, t);
			Ua(e, e.next), Ua(n, n.next)
		}
	}

	function Wa(t, e) {
		return Za(t.prev, t, e.prev) < 0 && Za(e.next, t, t.next) < 0
	}

	function Xa(t, e, n, i, r) {
		return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
	}

	function ja(t) {
		let e = t,
			n = t;
		do {
			(e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
		} while (e !== t);
		return n
	}

	function qa(t, e, n, i, r, a, s, o) {
		return (r - s) * (e - o) - (t - s) * (a - o) >= 0 && (t - s) * (i - o) - (n - s) * (e - o) >= 0 && (n - s) * (a - o) - (r - s) * (i - o) >= 0
	}

	function Ya(t, e) {
		return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
			let n = t;
			do {
				if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Ka(n, n.next, t, e)) return !0;
				n = n.next
			} while (n !== t);
			return !1
		}(t, e) && (ts(t, e) && ts(e, t) && function(t, e) {
			let n = t,
				i = !1;
			const r = (t.x + e.x) / 2,
				a = (t.y + e.y) / 2;
			do {
				n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
			} while (n !== t);
			return i
		}(t, e) && (Za(t.prev, t, e.prev) || Za(t, e.prev, e)) || Ja(t, e) && Za(t.prev, t, t.next) > 0 && Za(e.prev, e, e.next) > 0)
	}

	function Za(t, e, n) {
		return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
	}

	function Ja(t, e) {
		return t.x === e.x && t.y === e.y
	}

	function Ka(t, e, n, i) {
		const r = $a(Za(t, e, n)),
			a = $a(Za(t, e, i)),
			s = $a(Za(n, i, t)),
			o = $a(Za(n, i, e));
		return r !== a && s !== o || !(0 !== r || !Qa(t, n, e)) || !(0 !== a || !Qa(t, i, e)) || !(0 !== s || !Qa(n, t, i)) || !(0 !== o || !Qa(n, e, i))
	}

	function Qa(t, e, n) {
		return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
	}

	function $a(t) {
		return t > 0 ? 1 : t < 0 ? -1 : 0
	}

	function ts(t, e) {
		return Za(t.prev, t, t.next) < 0 ? Za(t, e, t.next) >= 0 && Za(t, t.prev, e) >= 0 : Za(t, e, t.prev) < 0 || Za(t, t.next, e) < 0
	}

	function es(t, e) {
		const n = new rs(t.i, t.x, t.y),
			i = new rs(e.i, e.x, e.y),
			r = t.next,
			a = e.prev;
		return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
	}

	function ns(t, e, n, i) {
		const r = new rs(t, e, n);
		return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
	}

	function is(t) {
		t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
	}

	function rs(t, e, n) {
		this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
	}
	class as {
		static area(t) {
			const e = t.length;
			let n = 0;
			for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
			return .5 * n
		}
		static isClockWise(t) {
			return as.area(t) < 0
		}
		static triangulateShape(t, e) {
			const n = [],
				i = [],
				r = [];
			ss(t), os(n, t);
			let a = t.length;
			e.forEach(ss);
			for (let t = 0; t < e.length; t++) i.push(a), a += e[t].length, os(n, e[t]);
			const s = function(t, e, n = 2) {
				const i = e && e.length,
					r = i ? e[0] * n : t.length;
				let a = Ia(t, 0, r, n, !0);
				const s = [];
				if (!a || a.next === a.prev) return s;
				let o, l, c, h, u, d, p;
				if (i && (a = function(t, e, n, i) {
					const r = [];
					let a, s, o, l, c;
					for (a = 0, s = e.length; a < s; a++) o = e[a] * i, l = a < s - 1 ? e[a + 1] * i : t.length, c = Ia(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(ja(c));
					for (r.sort(Ga), a = 0; a < r.length; a++) Va(r[a], n), n = Ua(n, n.next);
					return n
				}(t, e, a, n)), t.length > 80 * n) {
					o = c = t[0], l = h = t[1];
					for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
					p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0
				}
				return Fa(a, s, n, o, l, p), s
			}(n, i);
			for (let t = 0; t < s.length; t += 3) r.push(s.slice(t, t + 3));
			return r
		}
	}

	function ss(t) {
		const e = t.length;
		e > 2 && t[e - 1].equals(t[0]) && t.pop()
	}

	function os(t, e) {
		for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
	}
	class ls extends ue {
		constructor(t = new Na([new At(.5, .5), new At(-.5, .5), new At(-.5, -.5), new At(.5, -.5)]), e = {}) {
			super(), this.type = "ExtrudeGeometry", this.parameters = {
				shapes: t,
				options: e
			}, t = Array.isArray(t) ? t : [t];
			const n = this,
				i = [],
				r = [];
			for (let e = 0, n = t.length; e < n; e++) a(t[e]);

			function a(t) {
				const a = [],
					s = void 0 !== e.curveSegments ? e.curveSegments : 12,
					o = void 0 !== e.steps ? e.steps : 1,
					l = void 0 !== e.depth ? e.depth : 1;
				let c = void 0 === e.bevelEnabled || e.bevelEnabled,
					h = void 0 !== e.bevelThickness ? e.bevelThickness : .2,
					u = void 0 !== e.bevelSize ? e.bevelSize : h - .1,
					d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
					p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
				const f = e.extrudePath,
					m = void 0 !== e.UVGenerator ? e.UVGenerator : cs;
				let g, _, v, x, y, b = !1;
				f && (g = f.getSpacedPoints(o), b = !0, c = !1, _ = f.computeFrenetFrames(o, !1), v = new G, x = new G, y = new G), c || (p = 0, h = 0, u = 0, d = 0);
				const M = t.extractPoints(s);
				let S = M.shape;
				const E = M.holes;
				if (!as.isClockWise(S)) {
					S = S.reverse();
					for (let t = 0, e = E.length; t < e; t++) {
						const e = E[t];
						as.isClockWise(e) && (E[t] = e.reverse())
					}
				}
				const w = as.triangulateShape(S, E),
					T = S;
				for (let t = 0, e = E.length; t < e; t++) {
					const e = E[t];
					S = S.concat(e)
				}

				function A(t, e, n) {
					return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone()
						.multiplyScalar(n)
						.add(t)
				}
				const R = S.length,
					C = w.length;

				function L(t, e, n) {
					let i, r, a;
					const s = t.x - e.x,
						o = t.y - e.y,
						l = n.x - t.x,
						c = n.y - t.y,
						h = s * s + o * o,
						u = s * c - o * l;
					if (Math.abs(u) > Number.EPSILON) {
						const u = Math.sqrt(h),
							d = Math.sqrt(l * l + c * c),
							p = e.x - o / u,
							f = e.y + s / u,
							m = ((n.x - c / d - p) * c - (n.y + l / d - f) * l) / (s * c - o * l);
						i = p + s * m - t.x, r = f + o * m - t.y;
						const g = i * i + r * r;
						if (g <= 2) return new At(i, r);
						a = Math.sqrt(g / 2)
					} else {
						let t = !1;
						s > Number.EPSILON ? l > Number.EPSILON && (t = !0) : s < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (i = -o, r = s, a = Math.sqrt(h)) : (i = s, r = o, a = Math.sqrt(h / 2))
					}
					return new At(i / a, r / a)
				}
				const P = [];
				for (let t = 0, e = T.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), P[t] = L(T[t], T[n], T[i]);
				const D = [];
				let O, N = P.concat();
				for (let t = 0, e = E.length; t < e; t++) {
					const e = E[t];
					O = [];
					for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), O[t] = L(e[t], e[i], e[r]);
					D.push(O), N = N.concat(O)
				}
				for (let t = 0; t < p; t++) {
					const e = t / p,
						n = h * Math.cos(e * Math.PI / 2),
						i = u * Math.sin(e * Math.PI / 2) + d;
					for (let t = 0, e = T.length; t < e; t++) {
						const e = A(T[t], P[t], i);
						F(e.x, e.y, -n)
					}
					for (let t = 0, e = E.length; t < e; t++) {
						const e = E[t];
						O = D[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], O[t], i);
							F(r.x, r.y, -n)
						}
					}
				}
				const I = u + d;
				for (let t = 0; t < R; t++) {
					const e = c ? A(S[t], N[t], I) : S[t];
					b ? (x.copy(_.normals[0])
						.multiplyScalar(e.x), v.copy(_.binormals[0])
						.multiplyScalar(e.y), y.copy(g[0])
						.add(x)
						.add(v), F(y.x, y.y, y.z)) : F(e.x, e.y, 0)
				}
				for (let t = 1; t <= o; t++)
					for (let e = 0; e < R; e++) {
						const n = c ? A(S[e], N[e], I) : S[e];
						b ? (x.copy(_.normals[t])
							.multiplyScalar(n.x), v.copy(_.binormals[t])
							.multiplyScalar(n.y), y.copy(g[t])
							.add(x)
							.add(v), F(y.x, y.y, y.z)) : F(n.x, n.y, l / o * t)
					}
				for (let t = p - 1; t >= 0; t--) {
					const e = t / p,
						n = h * Math.cos(e * Math.PI / 2),
						i = u * Math.sin(e * Math.PI / 2) + d;
					for (let t = 0, e = T.length; t < e; t++) {
						const e = A(T[t], P[t], i);
						F(e.x, e.y, l + n)
					}
					for (let t = 0, e = E.length; t < e; t++) {
						const e = E[t];
						O = D[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], O[t], i);
							b ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : F(r.x, r.y, l + n)
						}
					}
				}

				function U(t, e) {
					let n = t.length;
					for (; --n >= 0;) {
						const i = n;
						let r = n - 1;
						r < 0 && (r = t.length - 1);
						for (let t = 0, n = o + 2 * p; t < n; t++) {
							const n = R * t,
								a = R * (t + 1);
							B(e + i + n, e + r + n, e + r + a, e + i + a)
						}
					}
				}

				function F(t, e, n) {
					a.push(t), a.push(e), a.push(n)
				}

				function z(t, e, r) {
					H(t), H(e), H(r);
					const a = i.length / 3,
						s = m.generateTopUV(n, i, a - 3, a - 2, a - 1);
					k(s[0]), k(s[1]), k(s[2])
				}

				function B(t, e, r, a) {
					H(t), H(e), H(a), H(e), H(r), H(a);
					const s = i.length / 3,
						o = m.generateSideWallUV(n, i, s - 6, s - 3, s - 2, s - 1);
					k(o[0]), k(o[1]), k(o[3]), k(o[1]), k(o[2]), k(o[3])
				}

				function H(t) {
					i.push(a[3 * t + 0]), i.push(a[3 * t + 1]), i.push(a[3 * t + 2])
				}

				function k(t) {
					r.push(t.x), r.push(t.y)
				}! function() {
					const t = i.length / 3;
					if (c) {
						let t = 0,
							e = R * t;
						for (let t = 0; t < C; t++) {
							const n = w[t];
							z(n[2] + e, n[1] + e, n[0] + e)
						}
						t = o + 2 * p, e = R * t;
						for (let t = 0; t < C; t++) {
							const n = w[t];
							z(n[0] + e, n[1] + e, n[2] + e)
						}
					} else {
						for (let t = 0; t < C; t++) {
							const e = w[t];
							z(e[2], e[1], e[0])
						}
						for (let t = 0; t < C; t++) {
							const e = w[t];
							z(e[0] + R * o, e[1] + R * o, e[2] + R * o)
						}
					}
					n.addGroup(t, i.length / 3 - t, 0)
				}(),
				function() {
					const t = i.length / 3;
					let e = 0;
					U(T, e), e += T.length;
					for (let t = 0, n = E.length; t < n; t++) {
						const n = E[t];
						U(n, e), e += n.length
					}
					n.addGroup(t, i.length / 3 - t, 1)
				}()
			}
			this.setAttribute("position", new Ft(i, 3)), this.setAttribute("uv", new Ft(r, 2)), this.computeVertexNormals()
		}
		toJSON() {
			const t = super.toJSON();
			return function(t, e, n) {
				if (n.shapes = [], Array.isArray(t))
					for (let e = 0, i = t.length; e < i; e++) {
						const i = t[e];
						n.shapes.push(i.uuid)
					} else n.shapes.push(t.uuid);
				return n.options = Object.assign({}, e), void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
			}(this.parameters.shapes, this.parameters.options, t)
		}
		static fromJSON(t, n) {
			const i = [];
			for (let e = 0, r = t.shapes.length; e < r; e++) {
				const r = n[t.shapes[e]];
				i.push(r)
			}
			const r = t.options.extrudePath;
			return void 0 !== r && (t.options.extrudePath = (new e[r.type])
				.fromJSON(r)), new ls(i, t.options)
		}
	}
	const cs = {
		generateTopUV: function(t, e, n, i, r) {
			const a = e[3 * n],
				s = e[3 * n + 1],
				o = e[3 * i],
				l = e[3 * i + 1],
				c = e[3 * r],
				h = e[3 * r + 1];
			return [new At(a, s), new At(o, l), new At(c, h)]
		},
		generateSideWallUV: function(t, e, n, i, r, a) {
			const s = e[3 * n],
				o = e[3 * n + 1],
				l = e[3 * n + 2],
				c = e[3 * i],
				h = e[3 * i + 1],
				u = e[3 * i + 2],
				d = e[3 * r],
				p = e[3 * r + 1],
				f = e[3 * r + 2],
				m = e[3 * a],
				g = e[3 * a + 1],
				_ = e[3 * a + 2];
			return Math.abs(o - h) < Math.abs(s - c) ? [new At(s, 1 - l), new At(c, 1 - u), new At(d, 1 - f), new At(m, 1 - _)] : [new At(o, 1 - l), new At(h, 1 - u), new At(p, 1 - f), new At(g, 1 - _)]
		}
	};
	class hs extends ue {
		constructor(t = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, a = 0, s = Math.PI) {
			super(), this.type = "SphereGeometry", this.parameters = {
				radius: t,
				widthSegments: e,
				heightSegments: n,
				phiStart: i,
				phiLength: r,
				thetaStart: a,
				thetaLength: s
			}, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
			const o = Math.min(a + s, Math.PI);
			let l = 0;
			const c = [],
				h = new G,
				u = new G,
				d = [],
				p = [],
				f = [],
				m = [];
			for (let d = 0; d <= n; d++) {
				const g = [],
					_ = d / n;
				let v = 0;
				0 == d && 0 == a ? v = .5 / e : d == n && o == Math.PI && (v = -.5 / e);
				for (let n = 0; n <= e; n++) {
					const o = n / e;
					h.x = -t * Math.cos(i + o * r) * Math.sin(a + _ * s), h.y = t * Math.cos(a + _ * s), h.z = t * Math.sin(i + o * r) * Math.sin(a + _ * s), p.push(h.x, h.y, h.z), u.copy(h)
						.normalize(), f.push(u.x, u.y, u.z), m.push(o + v, 1 - _), g.push(l++)
				}
				c.push(g)
			}
			for (let t = 0; t < n; t++)
				for (let i = 0; i < e; i++) {
					const e = c[t][i + 1],
						r = c[t][i],
						s = c[t + 1][i],
						l = c[t + 1][i + 1];
					(0 !== t || a > 0) && d.push(e, r, l), (t !== n - 1 || o < Math.PI) && d.push(r, s, l)
				}
			this.setIndex(d), this.setAttribute("position", new Ft(p, 3)), this.setAttribute("normal", new Ft(f, 3)), this.setAttribute("uv", new Ft(m, 2))
		}
		static fromJSON(t) {
			return new hs(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength)
		}
	}
	class us extends ue {
		constructor(t = new La(new G(-1, -1, 0), new G(-1, 1, 0), new G(1, 1, 0)), e = 64, n = 1, i = 8, r = !1) {
			super(), this.type = "TubeGeometry", this.parameters = {
				path: t,
				tubularSegments: e,
				radius: n,
				radialSegments: i,
				closed: r
			};
			const a = t.computeFrenetFrames(e, r);
			this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
			const s = new G,
				o = new G,
				l = new At;
			let c = new G;
			const h = [],
				u = [],
				d = [],
				p = [];

			function f(r) {
				c = t.getPointAt(r / e, c);
				const l = a.normals[r],
					d = a.binormals[r];
				for (let t = 0; t <= i; t++) {
					const e = t / i * Math.PI * 2,
						r = Math.sin(e),
						a = -Math.cos(e);
					o.x = a * l.x + r * d.x, o.y = a * l.y + r * d.y, o.z = a * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), s.x = c.x + n * o.x, s.y = c.y + n * o.y, s.z = c.z + n * o.z, h.push(s.x, s.y, s.z)
				}
			}! function() {
				for (let t = 0; t < e; t++) f(t);
				f(!1 === r ? e : 0),
					function() {
						for (let t = 0; t <= e; t++)
							for (let n = 0; n <= i; n++) l.x = t / e, l.y = n / i, d.push(l.x, l.y)
					}(),
					function() {
						for (let t = 1; t <= e; t++)
							for (let e = 1; e <= i; e++) {
								const n = (i + 1) * (t - 1) + (e - 1),
									r = (i + 1) * t + (e - 1),
									a = (i + 1) * t + e,
									s = (i + 1) * (t - 1) + e;
								p.push(n, r, s), p.push(r, a, s)
							}
					}()
			}(), this.setIndex(p), this.setAttribute("position", new Ft(h, 3)), this.setAttribute("normal", new Ft(u, 3)), this.setAttribute("uv", new Ft(d, 2))
		}
		toJSON() {
			const t = super.toJSON();
			return t.path = this.parameters.path.toJSON(), t
		}
		static fromJSON(t) {
			return new us((new e[t.path.type])
				.fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed)
		}
	}
	const ds = {
		enabled: !1,
		files: {},
		add: function(t, e) {
			!1 !== this.enabled && (this.files[t] = e)
		},
		get: function(t) {
			if (!1 !== this.enabled) return this.files[t]
		},
		remove: function(t) {
			delete this.files[t]
		},
		clear: function() {
			this.files = {}
		}
	};
	class ps {
		constructor(t, e, n) {
			const i = this;
			let r, a = !1,
				s = 0,
				o = 0;
			const l = [];
			this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
				o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), a = !0
			}, this.itemEnd = function(t) {
				s++, void 0 !== i.onProgress && i.onProgress(t, s, o), s === o && (a = !1, void 0 !== i.onLoad && i.onLoad())
			}, this.itemError = function(t) {
				void 0 !== i.onError && i.onError(t)
			}, this.resolveURL = function(t) {
				return r ? r(t) : t
			}, this.setURLModifier = function(t) {
				return r = t, this
			}, this.addHandler = function(t, e) {
				return l.push(t, e), this
			}, this.removeHandler = function(t) {
				const e = l.indexOf(t);
				return -1 !== e && l.splice(e, 2), this
			}, this.getHandler = function(t) {
				for (let e = 0, n = l.length; e < n; e += 2) {
					const n = l[e],
						i = l[e + 1];
					if (n.global && (n.lastIndex = 0), n.test(t)) return i
				}
				return null
			}
		}
	}
	const fs = new ps;
	class ms {
		constructor(t) {
			this.manager = void 0 !== t ? t : fs, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
		}
		load() {}
		loadAsync(t, e) {
			const n = this;
			return new Promise((function(i, r) {
				n.load(t, i, e, r)
			}))
		}
		parse() {}
		setCrossOrigin(t) {
			return this.crossOrigin = t, this
		}
		setWithCredentials(t) {
			return this.withCredentials = t, this
		}
		setPath(t) {
			return this.path = t, this
		}
		setResourcePath(t) {
			return this.resourcePath = t, this
		}
		setRequestHeader(t) {
			return this.requestHeader = t, this
		}
	}
	const gs = {};
	class _s extends Error {
		constructor(t, e) {
			super(t), this.response = e
		}
	}
	class vs extends ms {
		constructor(t) {
			super(t)
		}
		load(t, e, n, i) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			const r = ds.get(t);
			if (void 0 !== r) return this.manager.itemStart(t), setTimeout((() => {
				e && e(r), this.manager.itemEnd(t)
			}), 0), r;
			if (void 0 !== gs[t]) return void gs[t].push({
				onLoad: e,
				onProgress: n,
				onError: i
			});
			gs[t] = [], gs[t].push({
				onLoad: e,
				onProgress: n,
				onError: i
			});
			const a = new Request(t, {
					headers: new Headers(this.requestHeader),
					credentials: this.withCredentials ? "include" : "same-origin"
				}),
				s = this.mimeType,
				o = this.responseType;
			fetch(a)
				.then((e => {
					if (200 === e.status || 0 === e.status) {
						if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
						const n = gs[t],
							i = e.body.getReader(),
							r = e.headers.get("Content-Length"),
							a = r ? parseInt(r) : 0,
							s = 0 !== a;
						let o = 0;
						const l = new ReadableStream({
							start(t) {
								! function e() {
									i.read()
										.then((({
											done: i,
											value: r
										}) => {
											if (i) t.close();
											else {
												o += r.byteLength;
												const i = new ProgressEvent("progress", {
													lengthComputable: s,
													loaded: o,
													total: a
												});
												for (let t = 0, e = n.length; t < e; t++) {
													const e = n[t];
													e.onProgress && e.onProgress(i)
												}
												t.enqueue(r), e()
											}
										}))
								}()
							}
						});
						return new Response(l)
					}
					throw new _s(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e)
				}))
				.then((t => {
					switch (o) {
						case "arraybuffer":
							return t.arrayBuffer();
						case "blob":
							return t.blob();
						case "document":
							return t.text()
								.then((t => (new DOMParser)
									.parseFromString(t, s)));
						case "json":
							return t.json();
						default:
							if (void 0 === s) return t.text(); {
								const e = /charset="?([^;"\s]*)"?/i.exec(s),
									n = e && e[1] ? e[1].toLowerCase() : void 0,
									i = new TextDecoder(n);
								return t.arrayBuffer()
									.then((t => i.decode(t)))
							}
					}
				}))
				.then((e => {
					ds.add(t, e);
					const n = gs[t];
					delete gs[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onLoad && i.onLoad(e)
					}
				}))
				.catch((e => {
					const n = gs[t];
					if (void 0 === n) throw this.manager.itemError(t), e;
					delete gs[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onError && i.onError(e)
					}
					this.manager.itemError(t)
				}))
				.finally((() => {
					this.manager.itemEnd(t)
				})), this.manager.itemStart(t)
		}
		setResponseType(t) {
			return this.responseType = t, this
		}
		setMimeType(t) {
			return this.mimeType = t, this
		}
	}
	class xs {
		constructor(t = !0) {
			this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
		}
		start() {
			this.startTime = ys(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
		}
		stop() {
			this.getElapsedTime(), this.running = !1, this.autoStart = !1
		}
		getElapsedTime() {
			return this.getDelta(), this.elapsedTime
		}
		getDelta() {
			let t = 0;
			if (this.autoStart && !this.running) return this.start(), 0;
			if (this.running) {
				const e = ys();
				t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
			}
			return t
		}
	}

	function ys() {
		return ("undefined" == typeof performance ? Date : performance)
			.now()
	}
	class bs {
		constructor(t = 1, e = 0, n = 0) {
			return this.radius = t, this.phi = e, this.theta = n, this
		}
		set(t, e, n) {
			return this.radius = t, this.phi = e, this.theta = n, this
		}
		copy(t) {
			return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
		}
		makeSafe() {
			const t = 1e-6;
			return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
		}
		setFromVector3(t) {
			return this.setFromCartesianCoords(t.x, t.y, t.z)
		}
		setFromCartesianCoords(t, e, n) {
			return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(I(e / this.radius, -1, 1))), this
		}
		clone() {
			return (new this.constructor)
				.copy(this)
		}
	}
	class Ms {
		constructor() {
			this.type = "ShapePath", this.color = new Le, this.subPaths = [], this.currentPath = null
		}
		moveTo(t, e) {
			return this.currentPath = new Oa, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
		}
		lineTo(t, e) {
			return this.currentPath.lineTo(t, e), this
		}
		quadraticCurveTo(t, e, n, i) {
			return this.currentPath.quadraticCurveTo(t, e, n, i), this
		}
		bezierCurveTo(t, e, n, i, r, a) {
			return this.currentPath.bezierCurveTo(t, e, n, i, r, a), this
		}
		splineThru(t) {
			return this.currentPath.splineThru(t), this
		}
		toShapes(t) {
			function e(t, e) {
				const n = e.length;
				let i = !1;
				for (let r = n - 1, a = 0; a < n; r = a++) {
					let n = e[r],
						s = e[a],
						o = s.x - n.x,
						l = s.y - n.y;
					if (Math.abs(l) > Number.EPSILON) {
						if (l < 0 && (n = e[a], o = -o, s = e[r], l = -l), t.y < n.y || t.y > s.y) continue;
						if (t.y === n.y) {
							if (t.x === n.x) return !0
						} else {
							const e = l * (t.x - n.x) - o * (t.y - n.y);
							if (0 === e) return !0;
							if (e < 0) continue;
							i = !i
						}
					} else {
						if (t.y !== n.y) continue;
						if (s.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= s.x) return !0
					}
				}
				return i
			}
			const n = as.isClockWise,
				i = this.subPaths;
			if (0 === i.length) return [];
			let r, a, s;
			const o = [];
			if (1 === i.length) return a = i[0], s = new Na, s.curves = a.curves, o.push(s), o;
			let l = !n(i[0].getPoints());
			l = t ? !l : l;
			const c = [],
				h = [];
			let u, d, p = [],
				f = 0;
			h[f] = void 0, p[f] = [];
			for (let e = 0, s = i.length; e < s; e++) a = i[e], u = a.getPoints(), r = n(u), r = t ? !r : r, r ? (!l && h[f] && f++, h[f] = {
				s: new Na,
				p: u
			}, h[f].s.curves = a.curves, l && f++, p[f] = []) : p[f].push({
				h: a,
				p: u[0]
			});
			if (!h[0]) return function(t) {
				const e = [];
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n],
						r = new Na;
					r.curves = i.curves, e.push(r)
				}
				return e
			}(i);
			if (h.length > 1) {
				let t = !1,
					n = 0;
				for (let t = 0, e = h.length; t < e; t++) c[t] = [];
				for (let i = 0, r = h.length; i < r; i++) {
					const r = p[i];
					for (let a = 0; a < r.length; a++) {
						const s = r[a];
						let o = !0;
						for (let r = 0; r < h.length; r++) e(s.p, h[r].p) && (i !== r && n++, o ? (o = !1, c[r].push(s)) : t = !0);
						o && c[i].push(s)
					}
				}
				n > 0 && !1 === t && (p = c)
			}
			for (let t = 0, e = h.length; t < e; t++) {
				s = h[t].s, o.push(s), d = p[t];
				for (let t = 0, e = d.length; t < e; t++) s.holes.push(d[t].h)
			}
			return o
		}
	}
	"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
		detail: {
			revision: "145"
		}
	})), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "145");
	const Ss = {
			type: "change"
		},
		Es = {
			type: "start"
		},
		ws = {
			type: "end"
		};
	class Ts extends Pt {
		constructor(t, e) {
			super(), this.object = t, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new G, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
				LEFT: "ArrowLeft",
				UP: "ArrowUp",
				RIGHT: "ArrowRight",
				BOTTOM: "ArrowDown"
			}, this.mouseButtons = {
				LEFT: 0,
				MIDDLE: 1,
				RIGHT: 2
			}, this.touches = {
				ONE: 0,
				TWO: 2
			}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
				return s.phi
			}, this.getAzimuthalAngle = function() {
				return s.theta
			}, this.getDistance = function() {
				return this.object.position.distanceTo(this.target)
			}, this.listenToKeyEvents = function(t) {
				t.addEventListener("keydown", X), this._domElementKeyEvents = t
			}, this.saveState = function() {
				n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
			}, this.reset = function() {
				n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Ss), n.update(), r = i.NONE
			}, this.update = function() {
				const e = new G,
					u = (new k)
					.setFromUnitVectors(t.up, new G(0, 1, 0)),
					d = u.clone()
					.invert(),
					p = new G,
					f = new k,
					m = 2 * Math.PI;
				return function() {
					const t = n.object.position;
					e.copy(t)
						.sub(n.target), e.applyQuaternion(u), s.setFromVector3(e), n.autoRotate && r === i.NONE && S(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (s.theta += o.theta * n.dampingFactor, s.phi += o.phi * n.dampingFactor) : (s.theta += o.theta, s.phi += o.phi);
					let g = n.minAzimuthAngle,
						_ = n.maxAzimuthAngle;
					return isFinite(g) && isFinite(_) && (g < -Math.PI ? g += m : g > Math.PI && (g -= m), _ < -Math.PI ? _ += m : _ > Math.PI && (_ -= m), s.theta = g <= _ ? Math.max(g, Math.min(_, s.theta)) : s.theta > (g + _) / 2 ? Math.max(g, s.theta) : Math.min(_, s.theta)), s.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, s.phi)), s.makeSafe(), s.radius *= l, s.radius = Math.max(n.minDistance, Math.min(n.maxDistance, s.radius)), !0 === n.enableDamping ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), e.setFromSpherical(s), e.applyQuaternion(d), t.copy(n.target)
						.add(e), n.object.lookAt(n.target), !0 === n.enableDamping ? (o.theta *= 1 - n.dampingFactor, o.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (o.set(0, 0, 0), c.set(0, 0, 0)), l = 1, !!(h || p.distanceToSquared(n.object.position) > a || 8 * (1 - f.dot(n.object.quaternion)) > a) && (n.dispatchEvent(Ss), p.copy(n.object.position), f.copy(n.object.quaternion), h = !1, !0)
				}
			}(), this.dispose = function() {
				n.domElement.removeEventListener("contextmenu", j), n.domElement.removeEventListener("pointerdown", z), n.domElement.removeEventListener("pointercancel", V), n.domElement.removeEventListener("wheel", W), n.domElement.removeEventListener("pointermove", B), n.domElement.removeEventListener("pointerup", H), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", X)
			};
			const n = this,
				i = {
					NONE: -1,
					ROTATE: 0,
					DOLLY: 1,
					PAN: 2,
					TOUCH_ROTATE: 3,
					TOUCH_PAN: 4,
					TOUCH_DOLLY_PAN: 5,
					TOUCH_DOLLY_ROTATE: 6
				};
			let r = i.NONE;
			const a = 1e-6,
				s = new bs,
				o = new bs;
			let l = 1;
			const c = new G;
			let h = !1;
			const u = new At,
				d = new At,
				p = new At,
				f = new At,
				m = new At,
				g = new At,
				_ = new At,
				v = new At,
				x = new At,
				y = [],
				b = {};

			function M() {
				return Math.pow(.95, n.zoomSpeed)
			}

			function S(t) {
				o.theta -= t
			}

			function E(t) {
				o.phi -= t
			}
			const w = function() {
					const t = new G;
					return function(e, n) {
						t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), c.add(t)
					}
				}(),
				T = function() {
					const t = new G;
					return function(e, i) {
						!0 === n.screenSpacePanning ? t.setFromMatrixColumn(i, 1) : (t.setFromMatrixColumn(i, 0), t.crossVectors(n.object.up, t)), t.multiplyScalar(e), c.add(t)
					}
				}(),
				A = function() {
					const t = new G;
					return function(e, i) {
						const r = n.domElement;
						if (n.object.isPerspectiveCamera) {
							const a = n.object.position;
							t.copy(a)
								.sub(n.target);
							let s = t.length();
							s *= Math.tan(n.object.fov / 2 * Math.PI / 180), w(2 * e * s / r.clientHeight, n.object.matrix), T(2 * i * s / r.clientHeight, n.object.matrix)
						} else n.object.isOrthographicCamera ? (w(e * (n.object.right - n.object.left) / n.object.zoom / r.clientWidth, n.object.matrix), T(i * (n.object.top - n.object.bottom) / n.object.zoom / r.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
					}
				}();

			function R(t) {
				n.object.isPerspectiveCamera ? l /= t : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * t)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
			}

			function C(t) {
				n.object.isPerspectiveCamera ? l *= t : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / t)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
			}

			function L(t) {
				u.set(t.clientX, t.clientY)
			}

			function P(t) {
				f.set(t.clientX, t.clientY)
			}

			function D() {
				if (1 === y.length) u.set(y[0].pageX, y[0].pageY);
				else {
					const t = .5 * (y[0].pageX + y[1].pageX),
						e = .5 * (y[0].pageY + y[1].pageY);
					u.set(t, e)
				}
			}

			function O() {
				if (1 === y.length) f.set(y[0].pageX, y[0].pageY);
				else {
					const t = .5 * (y[0].pageX + y[1].pageX),
						e = .5 * (y[0].pageY + y[1].pageY);
					f.set(t, e)
				}
			}

			function N() {
				const t = y[0].pageX - y[1].pageX,
					e = y[0].pageY - y[1].pageY,
					n = Math.sqrt(t * t + e * e);
				_.set(0, n)
			}

			function I(t) {
				if (1 == y.length) d.set(t.pageX, t.pageY);
				else {
					const e = Z(t),
						n = .5 * (t.pageX + e.x),
						i = .5 * (t.pageY + e.y);
					d.set(n, i)
				}
				p.subVectors(d, u)
					.multiplyScalar(n.rotateSpeed);
				const e = n.domElement;
				S(2 * Math.PI * p.x / e.clientHeight), E(2 * Math.PI * p.y / e.clientHeight), u.copy(d)
			}

			function U(t) {
				if (1 === y.length) m.set(t.pageX, t.pageY);
				else {
					const e = Z(t),
						n = .5 * (t.pageX + e.x),
						i = .5 * (t.pageY + e.y);
					m.set(n, i)
				}
				g.subVectors(m, f)
					.multiplyScalar(n.panSpeed), A(g.x, g.y), f.copy(m)
			}

			function F(t) {
				const e = Z(t),
					i = t.pageX - e.x,
					r = t.pageY - e.y,
					a = Math.sqrt(i * i + r * r);
				v.set(0, a), x.set(0, Math.pow(v.y / _.y, n.zoomSpeed)), R(x.y), _.copy(v)
			}

			function z(t) {
				!1 !== n.enabled && (0 === y.length && (n.domElement.setPointerCapture(t.pointerId), n.domElement.addEventListener("pointermove", B), n.domElement.addEventListener("pointerup", H)), function(t) {
					y.push(t)
				}(t), "touch" === t.pointerType ? function(t) {
					switch (Y(t), y.length) {
						case 1:
							switch (n.touches.ONE) {
								case 0:
									if (!1 === n.enableRotate) return;
									D(), r = i.TOUCH_ROTATE;
									break;
								case 1:
									if (!1 === n.enablePan) return;
									O(), r = i.TOUCH_PAN;
									break;
								default:
									r = i.NONE
							}
							break;
						case 2:
							switch (n.touches.TWO) {
								case 2:
									if (!1 === n.enableZoom && !1 === n.enablePan) return;
									n.enableZoom && N(), n.enablePan && O(), r = i.TOUCH_DOLLY_PAN;
									break;
								case 3:
									if (!1 === n.enableZoom && !1 === n.enableRotate) return;
									n.enableZoom && N(), n.enableRotate && D(), r = i.TOUCH_DOLLY_ROTATE;
									break;
								default:
									r = i.NONE
							}
							break;
						default:
							r = i.NONE
					}
					r !== i.NONE && n.dispatchEvent(Es)
				}(t) : function(t) {
					let e;
					switch (t.button) {
						case 0:
							e = n.mouseButtons.LEFT;
							break;
						case 1:
							e = n.mouseButtons.MIDDLE;
							break;
						case 2:
							e = n.mouseButtons.RIGHT;
							break;
						default:
							e = -1
					}
					switch (e) {
						case 1:
							if (!1 === n.enableZoom) return;
							! function(t) {
								_.set(t.clientX, t.clientY)
							}(t), r = i.DOLLY;
							break;
						case 0:
							if (t.ctrlKey || t.metaKey || t.shiftKey) {
								if (!1 === n.enablePan) return;
								P(t), r = i.PAN
							} else {
								if (!1 === n.enableRotate) return;
								L(t), r = i.ROTATE
							}
							break;
						case 2:
							if (t.ctrlKey || t.metaKey || t.shiftKey) {
								if (!1 === n.enableRotate) return;
								L(t), r = i.ROTATE
							} else {
								if (!1 === n.enablePan) return;
								P(t), r = i.PAN
							}
							break;
						default:
							r = i.NONE
					}
					r !== i.NONE && n.dispatchEvent(Es)
				}(t))
			}

			function B(t) {
				!1 !== n.enabled && ("touch" === t.pointerType ? function(t) {
					switch (Y(t), r) {
						case i.TOUCH_ROTATE:
							if (!1 === n.enableRotate) return;
							I(t), n.update();
							break;
						case i.TOUCH_PAN:
							if (!1 === n.enablePan) return;
							U(t), n.update();
							break;
						case i.TOUCH_DOLLY_PAN:
							if (!1 === n.enableZoom && !1 === n.enablePan) return;
							! function(t) {
								n.enableZoom && F(t), n.enablePan && U(t)
							}(t), n.update();
							break;
						case i.TOUCH_DOLLY_ROTATE:
							if (!1 === n.enableZoom && !1 === n.enableRotate) return;
							! function(t) {
								n.enableZoom && F(t), n.enableRotate && I(t)
							}(t), n.update();
							break;
						default:
							r = i.NONE
					}
				}(t) : function(t) {
					switch (r) {
						case i.ROTATE:
							if (!1 === n.enableRotate) return;
							! function(t) {
								d.set(t.clientX, t.clientY), p.subVectors(d, u)
									.multiplyScalar(n.rotateSpeed);
								const e = n.domElement;
								S(2 * Math.PI * p.x / e.clientHeight), E(2 * Math.PI * p.y / e.clientHeight), u.copy(d), n.update()
							}(t);
							break;
						case i.DOLLY:
							if (!1 === n.enableZoom) return;
							! function(t) {
								v.set(t.clientX, t.clientY), x.subVectors(v, _), x.y > 0 ? R(M()) : x.y < 0 && C(M()), _.copy(v), n.update()
							}(t);
							break;
						case i.PAN:
							if (!1 === n.enablePan) return;
							! function(t) {
								m.set(t.clientX, t.clientY), g.subVectors(m, f)
									.multiplyScalar(n.panSpeed), A(g.x, g.y), f.copy(m), n.update()
							}(t)
					}
				}(t))
			}

			function H(t) {
				q(t), 0 === y.length && (n.domElement.releasePointerCapture(t.pointerId), n.domElement.removeEventListener("pointermove", B), n.domElement.removeEventListener("pointerup", H)), n.dispatchEvent(ws), r = i.NONE
			}

			function V(t) {
				q(t)
			}

			function W(t) {
				!1 !== n.enabled && !1 !== n.enableZoom && r === i.NONE && (t.preventDefault(), n.dispatchEvent(Es), function(t) {
					t.deltaY < 0 ? C(M()) : t.deltaY > 0 && R(M()), n.update()
				}(t), n.dispatchEvent(ws))
			}

			function X(t) {
				!1 !== n.enabled && !1 !== n.enablePan && function(t) {
					let e = !1;
					switch (t.code) {
						case n.keys.UP:
							A(0, n.keyPanSpeed), e = !0;
							break;
						case n.keys.BOTTOM:
							A(0, -n.keyPanSpeed), e = !0;
							break;
						case n.keys.LEFT:
							A(n.keyPanSpeed, 0), e = !0;
							break;
						case n.keys.RIGHT:
							A(-n.keyPanSpeed, 0), e = !0
					}
					e && (t.preventDefault(), n.update())
				}(t)
			}

			function j(t) {
				!1 !== n.enabled && t.preventDefault()
			}

			function q(t) {
				delete b[t.pointerId];
				for (let e = 0; e < y.length; e++)
					if (y[e].pointerId == t.pointerId) return void y.splice(e, 1)
			}

			function Y(t) {
				let e = b[t.pointerId];
				void 0 === e && (e = new At, b[t.pointerId] = e), e.set(t.pageX, t.pageY)
			}

			function Z(t) {
				const e = t.pointerId === y[0].pointerId ? y[1] : y[0];
				return b[e.pointerId]
			}
			n.domElement.addEventListener("contextmenu", j), n.domElement.addEventListener("pointerdown", z), n.domElement.addEventListener("pointercancel", V), n.domElement.addEventListener("wheel", W, {
				passive: !1
			}), this.update()
		}
	}

	function As(t, e) {
		var n = t.__state.conversionName.toString(),
			i = Math.round(t.r),
			r = Math.round(t.g),
			a = Math.round(t.b),
			s = t.a,
			o = Math.round(t.h),
			l = t.s.toFixed(1),
			c = t.v.toFixed(1);
		if (e || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
			for (var h = t.hex.toString(16); h.length < 6;) h = "0" + h;
			return "#" + h
		}
		return "CSS_RGB" === n ? "rgb(" + i + "," + r + "," + a + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + r + "," + a + "," + s + ")" : "HEX" === n ? "0x" + t.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + r + "," + a + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + r + "," + a + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + r + ",b:" + a + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + r + ",b:" + a + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + o + ",s:" + l + ",v:" + c + "}" : "HSVA_OBJ" === n ? "{h:" + o + ",s:" + l + ",v:" + c + ",a:" + s + "}" : "unknown format"
	}
	var Rs = Array.prototype.forEach,
		Cs = Array.prototype.slice,
		Ls = {
			BREAK: {},
			extend: function(t) {
				return this.each(Cs.call(arguments, 1), (function(e) {
					(this.isObject(e) ? Object.keys(e) : [])
					.forEach(function(n) {
						this.isUndefined(e[n]) || (t[n] = e[n])
					}.bind(this))
				}), this), t
			},
			defaults: function(t) {
				return this.each(Cs.call(arguments, 1), (function(e) {
					(this.isObject(e) ? Object.keys(e) : [])
					.forEach(function(n) {
						this.isUndefined(t[n]) && (t[n] = e[n])
					}.bind(this))
				}), this), t
			},
			compose: function() {
				var t = Cs.call(arguments);
				return function() {
					for (var e = Cs.call(arguments), n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
					return e[0]
				}
			},
			each: function(t, e, n) {
				if (t)
					if (Rs && t.forEach && t.forEach === Rs) t.forEach(e, n);
					else if (t.length === t.length + 0) {
					var i, r = void 0;
					for (r = 0, i = t.length; r < i; r++)
						if (r in t && e.call(n, t[r], r) === this.BREAK) return
				} else
					for (var a in t)
						if (e.call(n, t[a], a) === this.BREAK) return
			},
			defer: function(t) {
				setTimeout(t, 0)
			},
			debounce: function(t, e, n) {
				var i = void 0;
				return function() {
					var r = this,
						a = arguments;

					function s() {
						i = null, n || t.apply(r, a)
					}
					var o = n || !i;
					clearTimeout(i), i = setTimeout(s, e), o && t.apply(r, a)
				}
			},
			toArray: function(t) {
				return t.toArray ? t.toArray() : Cs.call(t)
			},
			isUndefined: function(t) {
				return void 0 === t
			},
			isNull: function(t) {
				return null === t
			},
			isNaN: function(t) {
				function e(e) {
					return t.apply(this, arguments)
				}
				return e.toString = function() {
					return t.toString()
				}, e
			}((function(t) {
				return isNaN(t)
			})),
			isArray: Array.isArray || function(t) {
				return t.constructor === Array
			},
			isObject: function(t) {
				return t === Object(t)
			},
			isNumber: function(t) {
				return t === t + 0
			},
			isString: function(t) {
				return t === t + ""
			},
			isBoolean: function(t) {
				return !1 === t || !0 === t
			},
			isFunction: function(t) {
				return t instanceof Function
			}
		},
		Ps = [{
			litmus: Ls.isString,
			conversions: {
				THREE_CHAR_HEX: {
					read: function(t) {
						var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
						return null !== e && {
							space: "HEX",
							hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString(), 0)
						}
					},
					write: As
				},
				SIX_CHAR_HEX: {
					read: function(t) {
						var e = t.match(/^#([A-F0-9]{6})$/i);
						return null !== e && {
							space: "HEX",
							hex: parseInt("0x" + e[1].toString(), 0)
						}
					},
					write: As
				},
				CSS_RGB: {
					read: function(t) {
						var e = t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
						return null !== e && {
							space: "RGB",
							r: parseFloat(e[1]),
							g: parseFloat(e[2]),
							b: parseFloat(e[3])
						}
					},
					write: As
				},
				CSS_RGBA: {
					read: function(t) {
						var e = t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
						return null !== e && {
							space: "RGB",
							r: parseFloat(e[1]),
							g: parseFloat(e[2]),
							b: parseFloat(e[3]),
							a: parseFloat(e[4])
						}
					},
					write: As
				}
			}
		}, {
			litmus: Ls.isNumber,
			conversions: {
				HEX: {
					read: function(t) {
						return {
							space: "HEX",
							hex: t,
							conversionName: "HEX"
						}
					},
					write: function(t) {
						return t.hex
					}
				}
			}
		}, {
			litmus: Ls.isArray,
			conversions: {
				RGB_ARRAY: {
					read: function(t) {
						return 3 === t.length && {
							space: "RGB",
							r: t[0],
							g: t[1],
							b: t[2]
						}
					},
					write: function(t) {
						return [t.r, t.g, t.b]
					}
				},
				RGBA_ARRAY: {
					read: function(t) {
						return 4 === t.length && {
							space: "RGB",
							r: t[0],
							g: t[1],
							b: t[2],
							a: t[3]
						}
					},
					write: function(t) {
						return [t.r, t.g, t.b, t.a]
					}
				}
			}
		}, {
			litmus: Ls.isObject,
			conversions: {
				RGBA_OBJ: {
					read: function(t) {
						return !!(Ls.isNumber(t.r) && Ls.isNumber(t.g) && Ls.isNumber(t.b) && Ls.isNumber(t.a)) && {
							space: "RGB",
							r: t.r,
							g: t.g,
							b: t.b,
							a: t.a
						}
					},
					write: function(t) {
						return {
							r: t.r,
							g: t.g,
							b: t.b,
							a: t.a
						}
					}
				},
				RGB_OBJ: {
					read: function(t) {
						return !!(Ls.isNumber(t.r) && Ls.isNumber(t.g) && Ls.isNumber(t.b)) && {
							space: "RGB",
							r: t.r,
							g: t.g,
							b: t.b
						}
					},
					write: function(t) {
						return {
							r: t.r,
							g: t.g,
							b: t.b
						}
					}
				},
				HSVA_OBJ: {
					read: function(t) {
						return !!(Ls.isNumber(t.h) && Ls.isNumber(t.s) && Ls.isNumber(t.v) && Ls.isNumber(t.a)) && {
							space: "HSV",
							h: t.h,
							s: t.s,
							v: t.v,
							a: t.a
						}
					},
					write: function(t) {
						return {
							h: t.h,
							s: t.s,
							v: t.v,
							a: t.a
						}
					}
				},
				HSV_OBJ: {
					read: function(t) {
						return !!(Ls.isNumber(t.h) && Ls.isNumber(t.s) && Ls.isNumber(t.v)) && {
							space: "HSV",
							h: t.h,
							s: t.s,
							v: t.v
						}
					},
					write: function(t) {
						return {
							h: t.h,
							s: t.s,
							v: t.v
						}
					}
				}
			}
		}],
		Ds = void 0,
		Os = void 0,
		Ns = function() {
			Os = !1;
			var t = arguments.length > 1 ? Ls.toArray(arguments) : arguments[0];
			return Ls.each(Ps, (function(e) {
				if (e.litmus(t)) return Ls.each(e.conversions, (function(e, n) {
					if (Ds = e.read(t), !1 === Os && !1 !== Ds) return Os = Ds, Ds.conversionName = n, Ds.conversion = e, Ls.BREAK
				})), Ls.BREAK
			})), Os
		},
		Is = void 0,
		Us = {
			hsv_to_rgb: function(t, e, n) {
				var i = Math.floor(t / 60) % 6,
					r = t / 60 - Math.floor(t / 60),
					a = n * (1 - e),
					s = n * (1 - r * e),
					o = n * (1 - (1 - r) * e),
					l = [
						[n, o, a],
						[s, n, a],
						[a, n, o],
						[a, s, n],
						[o, a, n],
						[n, a, s]
					][i];
				return {
					r: 255 * l[0],
					g: 255 * l[1],
					b: 255 * l[2]
				}
			},
			rgb_to_hsv: function(t, e, n) {
				var i = Math.min(t, e, n),
					r = Math.max(t, e, n),
					a = r - i,
					s = void 0;
				return 0 === r ? {
					h: NaN,
					s: 0,
					v: 0
				} : (s = t === r ? (e - n) / a : e === r ? 2 + (n - t) / a : 4 + (t - e) / a, (s /= 6) < 0 && (s += 1), {
					h: 360 * s,
					s: a / r,
					v: r / 255
				})
			},
			rgb_to_hex: function(t, e, n) {
				var i = this.hex_with_component(0, 2, t);
				return i = this.hex_with_component(i, 1, e), this.hex_with_component(i, 0, n)
			},
			component_from_hex: function(t, e) {
				return t >> 8 * e & 255
			},
			hex_with_component: function(t, e, n) {
				return n << (Is = 8 * e) | t & ~(255 << Is)
			}
		},
		Fs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		zs = function(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		},
		Bs = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		Hs = function t(e, n, i) {
			null === e && (e = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(e, n);
			if (void 0 === r) {
				var a = Object.getPrototypeOf(e);
				return null === a ? void 0 : t(a, n, i)
			}
			if ("value" in r) return r.value;
			var s = r.get;
			return void 0 !== s ? s.call(i) : void 0
		},
		ks = function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		},
		Gs = function(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		},
		Vs = function() {
			function t() {
				if (zs(this, t), this.__state = Ns.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
				this.__state.a = this.__state.a || 1
			}
			return Bs(t, [{
				key: "toString",
				value: function() {
					return As(this)
				}
			}, {
				key: "toHexString",
				value: function() {
					return As(this, !0)
				}
			}, {
				key: "toOriginal",
				value: function() {
					return this.__state.conversion.write(this)
				}
			}]), t
		}();

	function Ws(t, e, n) {
		Object.defineProperty(t, e, {
			get: function() {
				return "RGB" === this.__state.space || Vs.recalculateRGB(this, e, n), this.__state[e]
			},
			set: function(t) {
				"RGB" !== this.__state.space && (Vs.recalculateRGB(this, e, n), this.__state.space = "RGB"), this.__state[e] = t
			}
		})
	}

	function Xs(t, e) {
		Object.defineProperty(t, e, {
			get: function() {
				return "HSV" === this.__state.space || Vs.recalculateHSV(this), this.__state[e]
			},
			set: function(t) {
				"HSV" !== this.__state.space && (Vs.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = t
			}
		})
	}
	Vs.recalculateRGB = function(t, e, n) {
		if ("HEX" === t.__state.space) t.__state[e] = Us.component_from_hex(t.__state.hex, n);
		else {
			if ("HSV" !== t.__state.space) throw new Error("Corrupted color state");
			Ls.extend(t.__state, Us.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
		}
	}, Vs.recalculateHSV = function(t) {
		var e = Us.rgb_to_hsv(t.r, t.g, t.b);
		Ls.extend(t.__state, {
			s: e.s,
			v: e.v
		}), Ls.isNaN(e.h) ? Ls.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = e.h
	}, Vs.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], Ws(Vs.prototype, "r", 2), Ws(Vs.prototype, "g", 1), Ws(Vs.prototype, "b", 0), Xs(Vs.prototype, "h"), Xs(Vs.prototype, "s"), Xs(Vs.prototype, "v"), Object.defineProperty(Vs.prototype, "a", {
		get: function() {
			return this.__state.a
		},
		set: function(t) {
			this.__state.a = t
		}
	}), Object.defineProperty(Vs.prototype, "hex", {
		get: function() {
			return "HEX" !== this.__state.space && (this.__state.hex = Us.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
		},
		set: function(t) {
			this.__state.space = "HEX", this.__state.hex = t
		}
	});
	var js = function() {
			function t(e, n) {
				zs(this, t), this.initialValue = e[n], this.domElement = document.createElement("div"), this.object = e, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0
			}
			return Bs(t, [{
				key: "onChange",
				value: function(t) {
					return this.__onChange = t, this
				}
			}, {
				key: "onFinishChange",
				value: function(t) {
					return this.__onFinishChange = t, this
				}
			}, {
				key: "setValue",
				value: function(t) {
					return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
				}
			}, {
				key: "getValue",
				value: function() {
					return this.object[this.property]
				}
			}, {
				key: "updateDisplay",
				value: function() {
					return this
				}
			}, {
				key: "isModified",
				value: function() {
					return this.initialValue !== this.getValue()
				}
			}]), t
		}(),
		qs = {};
	Ls.each({
		HTMLEvents: ["change"],
		MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
		KeyboardEvents: ["keydown"]
	}, (function(t, e) {
		Ls.each(t, (function(t) {
			qs[t] = e
		}))
	}));
	var Ys = /(\d+(\.\d+)?)px/;

	function Zs(t) {
		if ("0" === t || Ls.isUndefined(t)) return 0;
		var e = t.match(Ys);
		return Ls.isNull(e) ? 0 : parseFloat(e[1])
	}
	var Js = {
			makeSelectable: function(t, e) {
				void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function() {
					return !1
				} : function() {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
			},
			makeFullscreen: function(t, e, n) {
				var i = n,
					r = e;
				Ls.isUndefined(r) && (r = !0), Ls.isUndefined(i) && (i = !0), t.style.position = "absolute", r && (t.style.left = 0, t.style.right = 0), i && (t.style.top = 0, t.style.bottom = 0)
			},
			fakeEvent: function(t, e, n, i) {
				var r = n || {},
					a = qs[e];
				if (!a) throw new Error("Event type " + e + " not supported.");
				var s = document.createEvent(a);
				switch (a) {
					case "MouseEvents":
						var o = r.x || r.clientX || 0,
							l = r.y || r.clientY || 0;
						s.initMouseEvent(e, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, o, l, !1, !1, !1, !1, 0, null);
						break;
					case "KeyboardEvents":
						var c = s.initKeyboardEvent || s.initKeyEvent;
						Ls.defaults(r, {
							cancelable: !0,
							ctrlKey: !1,
							altKey: !1,
							shiftKey: !1,
							metaKey: !1,
							keyCode: void 0,
							charCode: void 0
						}), c(e, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
						break;
					default:
						s.initEvent(e, r.bubbles || !1, r.cancelable || !0)
				}
				Ls.defaults(s, i), t.dispatchEvent(s)
			},
			bind: function(t, e, n, i) {
				var r = i || !1;
				return t.addEventListener ? t.addEventListener(e, n, r) : t.attachEvent && t.attachEvent("on" + e, n), Js
			},
			unbind: function(t, e, n, i) {
				var r = i || !1;
				return t.removeEventListener ? t.removeEventListener(e, n, r) : t.detachEvent && t.detachEvent("on" + e, n), Js
			},
			addClass: function(t, e) {
				if (void 0 === t.className) t.className = e;
				else if (t.className !== e) {
					var n = t.className.split(/ +/); - 1 === n.indexOf(e) && (n.push(e), t.className = n.join(" ")
						.replace(/^\s+/, "")
						.replace(/\s+$/, ""))
				}
				return Js
			},
			removeClass: function(t, e) {
				if (e)
					if (t.className === e) t.removeAttribute("class");
					else {
						var n = t.className.split(/ +/),
							i = n.indexOf(e); - 1 !== i && (n.splice(i, 1), t.className = n.join(" "))
					}
				else t.className = void 0;
				return Js
			},
			hasClass: function(t, e) {
				return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)")
					.test(t.className) || !1
			},
			getWidth: function(t) {
				var e = getComputedStyle(t);
				return Zs(e["border-left-width"]) + Zs(e["border-right-width"]) + Zs(e["padding-left"]) + Zs(e["padding-right"]) + Zs(e.width)
			},
			getHeight: function(t) {
				var e = getComputedStyle(t);
				return Zs(e["border-top-width"]) + Zs(e["border-bottom-width"]) + Zs(e["padding-top"]) + Zs(e["padding-bottom"]) + Zs(e.height)
			},
			getOffset: function(t) {
				var e = t,
					n = {
						left: 0,
						top: 0
					};
				if (e.offsetParent)
					do {
						n.left += e.offsetLeft, n.top += e.offsetTop, e = e.offsetParent
					} while (e);
				return n
			},
			isActive: function(t) {
				return t === document.activeElement && (t.type || t.href)
			}
		},
		Ks = function(t) {
			function e(t, n) {
				zs(this, e);
				var i = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
						.call(this, t, n)),
					r = i;
				return i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox"), Js.bind(i.__checkbox, "change", (function() {
					r.setValue(!r.__prev)
				}), !1), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i
			}
			return ks(e, t), Bs(e, [{
				key: "setValue",
				value: function(t) {
					var n = Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this)
						.call(this, t);
					return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n
				}
			}, {
				key: "updateDisplay",
				value: function() {
					return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this)
						.call(this)
				}
			}]), e
		}(js),
		Qs = function(t) {
			function e(t, n, i) {
				zs(this, e);
				var r = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
						.call(this, t, n)),
					a = i,
					s = r;
				if (r.__select = document.createElement("select"), Ls.isArray(a)) {
					var o = {};
					Ls.each(a, (function(t) {
						o[t] = t
					})), a = o
				}
				return Ls.each(a, (function(t, e) {
					var n = document.createElement("option");
					n.innerHTML = e, n.setAttribute("value", t), s.__select.appendChild(n)
				})), r.updateDisplay(), Js.bind(r.__select, "change", (function() {
					var t = this.options[this.selectedIndex].value;
					s.setValue(t)
				})), r.domElement.appendChild(r.__select), r
			}
			return ks(e, t), Bs(e, [{
				key: "setValue",
				value: function(t) {
					var n = Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this)
						.call(this, t);
					return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n
				}
			}, {
				key: "updateDisplay",
				value: function() {
					return Js.isActive(this.__select) ? this : (this.__select.value = this.getValue(), Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this)
						.call(this))
				}
			}]), e
		}(js),
		$s = function(t) {
			function e(t, n) {
				zs(this, e);
				var i = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
						.call(this, t, n)),
					r = i;

				function a() {
					r.setValue(r.__input.value)
				}
				return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), Js.bind(i.__input, "keyup", a), Js.bind(i.__input, "change", a), Js.bind(i.__input, "blur", (function() {
					r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
				})), Js.bind(i.__input, "keydown", (function(t) {
					13 === t.keyCode && this.blur()
				})), i.updateDisplay(), i.domElement.appendChild(i.__input), i
			}
			return ks(e, t), Bs(e, [{
				key: "updateDisplay",
				value: function() {
					return Js.isActive(this.__input) || (this.__input.value = this.getValue()), Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this)
						.call(this)
				}
			}]), e
		}(js);

	function to(t) {
		var e = t.toString();
		return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
	}
	var eo = function(t) {
			function e(t, n, i) {
				zs(this, e);
				var r = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
						.call(this, t, n)),
					a = i || {};
				return r.__min = a.min, r.__max = a.max, r.__step = a.step, Ls.isUndefined(r.__step) ? 0 === r.initialValue ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = to(r.__impliedStep), r
			}
			return ks(e, t), Bs(e, [{
				key: "setValue",
				value: function(t) {
					var n = t;
					return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this)
						.call(this, n)
				}
			}, {
				key: "min",
				value: function(t) {
					return this.__min = t, this
				}
			}, {
				key: "max",
				value: function(t) {
					return this.__max = t, this
				}
			}, {
				key: "step",
				value: function(t) {
					return this.__step = t, this.__impliedStep = t, this.__precision = to(t), this
				}
			}]), e
		}(js),
		no = function(t) {
			function e(t, n, i) {
				zs(this, e);
				var r = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
					.call(this, t, n, i));
				r.__truncationSuspended = !1;
				var a = r,
					s = void 0;

				function o() {
					a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
				}

				function l(t) {
					var e = s - t.clientY;
					a.setValue(a.getValue() + e * a.__impliedStep), s = t.clientY
				}

				function c() {
					Js.unbind(window, "mousemove", l), Js.unbind(window, "mouseup", c), o()
				}
				return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), Js.bind(r.__input, "change", (function() {
					var t = parseFloat(a.__input.value);
					Ls.isNaN(t) || a.setValue(t)
				})), Js.bind(r.__input, "blur", (function() {
					o()
				})), Js.bind(r.__input, "mousedown", (function(t) {
					Js.bind(window, "mousemove", l), Js.bind(window, "mouseup", c), s = t.clientY
				})), Js.bind(r.__input, "keydown", (function(t) {
					13 === t.keyCode && (a.__truncationSuspended = !0, this.blur(), a.__truncationSuspended = !1, o())
				})), r.updateDisplay(), r.domElement.appendChild(r.__input), r
			}
			return ks(e, t), Bs(e, [{
				key: "updateDisplay",
				value: function() {
					var t, n, i;
					return this.__input.value = this.__truncationSuspended ? this.getValue() : (t = this.getValue(), n = this.__precision, i = Math.pow(10, n), Math.round(t * i) / i), Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this)
						.call(this)
				}
			}]), e
		}(eo);

	function io(t, e, n, i, r) {
		return i + (t - e) / (n - e) * (r - i)
	}
	var ro = function(t) {
			function e(t, n, i, r, a) {
				zs(this, e);
				var s = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
						.call(this, t, n, {
							min: i,
							max: r,
							step: a
						})),
					o = s;

				function l(t) {
					t.preventDefault();
					var e = o.__background.getBoundingClientRect();
					return o.setValue(io(t.clientX, e.left, e.right, o.__min, o.__max)), !1
				}

				function c() {
					Js.unbind(window, "mousemove", l), Js.unbind(window, "mouseup", c), o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
				}

				function h(t) {
					var e = t.touches[0].clientX,
						n = o.__background.getBoundingClientRect();
					o.setValue(io(e, n.left, n.right, o.__min, o.__max))
				}

				function u() {
					Js.unbind(window, "touchmove", h), Js.unbind(window, "touchend", u), o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
				}
				return s.__background = document.createElement("div"), s.__foreground = document.createElement("div"), Js.bind(s.__background, "mousedown", (function(t) {
					document.activeElement.blur(), Js.bind(window, "mousemove", l), Js.bind(window, "mouseup", c), l(t)
				})), Js.bind(s.__background, "touchstart", (function(t) {
					1 === t.touches.length && (Js.bind(window, "touchmove", h), Js.bind(window, "touchend", u), h(t))
				})), Js.addClass(s.__background, "slider"), Js.addClass(s.__foreground, "slider-fg"), s.updateDisplay(), s.__background.appendChild(s.__foreground), s.domElement.appendChild(s.__background), s
			}
			return ks(e, t), Bs(e, [{
				key: "updateDisplay",
				value: function() {
					var t = (this.getValue() - this.__min) / (this.__max - this.__min);
					return this.__foreground.style.width = 100 * t + "%", Hs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this)
						.call(this)
				}
			}]), e
		}(eo),
		ao = function(t) {
			function e(t, n, i) {
				zs(this, e);
				var r = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
						.call(this, t, n)),
					a = r;
				return r.__button = document.createElement("div"), r.__button.innerHTML = void 0 === i ? "Fire" : i, Js.bind(r.__button, "click", (function(t) {
					return t.preventDefault(), a.fire(), !1
				})), Js.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r
			}
			return ks(e, t), Bs(e, [{
				key: "fire",
				value: function() {
					this.__onChange && this.__onChange.call(this), this.getValue()
						.call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
				}
			}]), e
		}(js),
		so = function(t) {
			function e(t, n) {
				zs(this, e);
				var i = Gs(this, (e.__proto__ || Object.getPrototypeOf(e))
					.call(this, t, n));
				i.__color = new Vs(i.getValue()), i.__temp = new Vs(0);
				var r = i;
				i.domElement = document.createElement("div"), Js.makeSelectable(i.domElement, !1), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", Js.bind(i.__input, "keydown", (function(t) {
					13 === t.keyCode && u.call(this)
				})), Js.bind(i.__input, "blur", u), Js.bind(i.__selector, "mousedown", (function() {
					Js.addClass(this, "drag")
						.bind(window, "mouseup", (function() {
							Js.removeClass(r.__selector, "drag")
						}))
				})), Js.bind(i.__selector, "touchstart", (function() {
					Js.addClass(this, "drag")
						.bind(window, "touchend", (function() {
							Js.removeClass(r.__selector, "drag")
						}))
				}));
				var a, s = document.createElement("div");

				function o(t) {
					p(t), Js.bind(window, "mousemove", p), Js.bind(window, "touchmove", p), Js.bind(window, "mouseup", c), Js.bind(window, "touchend", c)
				}

				function l(t) {
					f(t), Js.bind(window, "mousemove", f), Js.bind(window, "touchmove", f), Js.bind(window, "mouseup", h), Js.bind(window, "touchend", h)
				}

				function c() {
					Js.unbind(window, "mousemove", p), Js.unbind(window, "touchmove", p), Js.unbind(window, "mouseup", c), Js.unbind(window, "touchend", c), d()
				}

				function h() {
					Js.unbind(window, "mousemove", f), Js.unbind(window, "touchmove", f), Js.unbind(window, "mouseup", h), Js.unbind(window, "touchend", h), d()
				}

				function u() {
					var t = Ns(this.value);
					!1 !== t ? (r.__color.__state = t, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString()
				}

				function d() {
					r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal())
				}

				function p(t) {
					-1 === t.type.indexOf("touch") && t.preventDefault();
					var e = r.__saturation_field.getBoundingClientRect(),
						n = t.touches && t.touches[0] || t,
						i = n.clientX,
						a = n.clientY,
						s = (i - e.left) / (e.right - e.left),
						o = 1 - (a - e.top) / (e.bottom - e.top);
					return o > 1 ? o = 1 : o < 0 && (o = 0), s > 1 ? s = 1 : s < 0 && (s = 0), r.__color.v = o, r.__color.s = s, r.setValue(r.__color.toOriginal()), !1
				}

				function f(t) {
					-1 === t.type.indexOf("touch") && t.preventDefault();
					var e = r.__hue_field.getBoundingClientRect(),
						n = 1 - ((t.touches && t.touches[0] || t)
							.clientY - e.top) / (e.bottom - e.top);
					return n > 1 ? n = 1 : n < 0 && (n = 0), r.__color.h = 360 * n, r.setValue(r.__color.toOriginal()), !1
				}
				return Ls.extend(i.__selector.style, {
						width: "122px",
						height: "102px",
						padding: "3px",
						backgroundColor: "#222",
						boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
					}), Ls.extend(i.__field_knob.style, {
						position: "absolute",
						width: "12px",
						height: "12px",
						border: i.__field_knob_border + (i.__color.v < .5 ? "#fff" : "#000"),
						boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
						borderRadius: "12px",
						zIndex: 1
					}), Ls.extend(i.__hue_knob.style, {
						position: "absolute",
						width: "15px",
						height: "2px",
						borderRight: "4px solid #fff",
						zIndex: 1
					}), Ls.extend(i.__saturation_field.style, {
						width: "100px",
						height: "100px",
						border: "1px solid #555",
						marginRight: "3px",
						display: "inline-block",
						cursor: "pointer"
					}), Ls.extend(s.style, {
						width: "100%",
						height: "100%",
						background: "none"
					}), lo(s, "top", "rgba(0,0,0,0)", "#000"), Ls.extend(i.__hue_field.style, {
						width: "15px",
						height: "100px",
						border: "1px solid #555",
						cursor: "ns-resize",
						position: "absolute",
						top: "3px",
						right: "3px"
					}), (a = i.__hue_field)
					.style.background = "", a.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", a.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", a.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", a.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", a.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", Ls.extend(i.__input.style, {
						outline: "none",
						textAlign: "center",
						color: "#fff",
						border: 0,
						fontWeight: "bold",
						textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)"
					}), Js.bind(i.__saturation_field, "mousedown", o), Js.bind(i.__saturation_field, "touchstart", o), Js.bind(i.__field_knob, "mousedown", o), Js.bind(i.__field_knob, "touchstart", o), Js.bind(i.__hue_field, "mousedown", l), Js.bind(i.__hue_field, "touchstart", l), i.__saturation_field.appendChild(s), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay(), i
			}
			return ks(e, t), Bs(e, [{
				key: "updateDisplay",
				value: function() {
					var t = Ns(this.getValue());
					if (!1 !== t) {
						var e = !1;
						Ls.each(Vs.COMPONENTS, (function(n) {
							if (!Ls.isUndefined(t[n]) && !Ls.isUndefined(this.__color.__state[n]) && t[n] !== this.__color.__state[n]) return e = !0, {}
						}), this), e && Ls.extend(this.__color.__state, t)
					}
					Ls.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
					var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
						i = 255 - n;
					Ls.extend(this.__field_knob.style, {
						marginLeft: 100 * this.__color.s - 7 + "px",
						marginTop: 100 * (1 - this.__color.v) - 7 + "px",
						backgroundColor: this.__temp.toHexString(),
						border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
					}), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, lo(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), Ls.extend(this.__input.style, {
						backgroundColor: this.__color.toHexString(),
						color: "rgb(" + n + "," + n + "," + n + ")",
						textShadow: this.__input_textShadow + "rgba(" + i + "," + i + "," + i + ",.7)"
					})
				}
			}]), e
		}(js),
		oo = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

	function lo(t, e, n, i) {
		t.style.background = "", Ls.each(oo, (function(r) {
			t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + n + " 0%, " + i + " 100%); "
		}))
	}
	var co = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>',
		ho = function(t, e) {
			var n = t[e];
			return Ls.isArray(arguments[2]) || Ls.isObject(arguments[2]) ? new Qs(t, e, arguments[2]) : Ls.isNumber(n) ? Ls.isNumber(arguments[2]) && Ls.isNumber(arguments[3]) ? Ls.isNumber(arguments[4]) ? new ro(t, e, arguments[2], arguments[3], arguments[4]) : new ro(t, e, arguments[2], arguments[3]) : Ls.isNumber(arguments[4]) ? new no(t, e, {
				min: arguments[2],
				max: arguments[3],
				step: arguments[4]
			}) : new no(t, e, {
				min: arguments[2],
				max: arguments[3]
			}) : Ls.isString(n) ? new $s(t, e) : Ls.isFunction(n) ? new ao(t, e, "") : Ls.isBoolean(n) ? new Ks(t, e) : null
		},
		uo = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
			setTimeout(t, 1e3 / 60)
		},
		po = function() {
			function t() {
				zs(this, t), this.backgroundElement = document.createElement("div"), Ls.extend(this.backgroundElement.style, {
					backgroundColor: "rgba(0,0,0,0.8)",
					top: 0,
					left: 0,
					display: "none",
					zIndex: "1000",
					opacity: 0,
					WebkitTransition: "opacity 0.2s linear",
					transition: "opacity 0.2s linear"
				}), Js.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), Ls.extend(this.domElement.style, {
					position: "fixed",
					display: "none",
					zIndex: "1001",
					opacity: 0,
					WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
					transition: "transform 0.2s ease-out, opacity 0.2s linear"
				}), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
				var e = this;
				Js.bind(this.backgroundElement, "click", (function() {
					e.hide()
				}))
			}
			return Bs(t, [{
				key: "show",
				value: function() {
					var t = this;
					this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), Ls.defer((function() {
						t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
					}))
				}
			}, {
				key: "hide",
				value: function() {
					var t = this,
						e = function e() {
							t.domElement.style.display = "none", t.backgroundElement.style.display = "none", Js.unbind(t.domElement, "webkitTransitionEnd", e), Js.unbind(t.domElement, "transitionend", e), Js.unbind(t.domElement, "oTransitionEnd", e)
						};
					Js.bind(this.domElement, "webkitTransitionEnd", e), Js.bind(this.domElement, "transitionend", e), Js.bind(this.domElement, "oTransitionEnd", e), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
				}
			}, {
				key: "layout",
				value: function() {
					this.domElement.style.left = window.innerWidth / 2 - Js.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - Js.getHeight(this.domElement) / 2 + "px"
				}
			}]), t
		}();
	! function(t, e) {
		var n = e || document,
			i = document.createElement("style");
		i.type = "text/css", i.innerHTML = t;
		var r = n.getElementsByTagName("head")[0];
		try {
			r.appendChild(i)
		} catch (t) {}
	}(function(t) {
		if ("undefined" != typeof window) {
			var e = document.createElement("style");
			return e.setAttribute("type", "text/css"), e.innerHTML = t, document.head.appendChild(e), t
		}
	}(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));
	var fo = "Default",
		mo = function() {
			try {
				return !!window.localStorage
			} catch (t) {
				return !1
			}
		}(),
		go = void 0,
		_o = !0,
		vo = void 0,
		xo = !1,
		yo = [],
		bo = function t(e) {
			var n = this,
				i = e || {};
			this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), Js.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], i = Ls.defaults(i, {
				closeOnTop: !1,
				autoPlace: !0,
				width: t.DEFAULT_WIDTH
			}), i = Ls.defaults(i, {
				resizable: i.autoPlace,
				hideable: i.autoPlace
			}), Ls.isUndefined(i.load) ? i.load = {
				preset: fo
			} : i.preset && (i.load.preset = i.preset), Ls.isUndefined(i.parent) && i.hideable && yo.push(this), i.resizable = Ls.isUndefined(i.parent) && i.resizable, i.autoPlace && Ls.isUndefined(i.scrollable) && (i.scrollable = !0);
			var r, a = mo && "true" === localStorage.getItem(Ao(0, "isLocal")),
				s = void 0,
				o = void 0;
			if (Object.defineProperties(this, {
				parent: {
					get: function() {
						return i.parent
					}
				},
				scrollable: {
					get: function() {
						return i.scrollable
					}
				},
				autoPlace: {
					get: function() {
						return i.autoPlace
					}
				},
				closeOnTop: {
					get: function() {
						return i.closeOnTop
					}
				},
				preset: {
					get: function() {
						return n.parent ? n.getRoot()
							.preset : i.load.preset
					},
					set: function(t) {
						n.parent ? n.getRoot()
							.preset = t : i.load.preset = t,
							function(t) {
								for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].value === t.preset && (t.__preset_select.selectedIndex = e)
							}(this), n.revert()
					}
				},
				width: {
					get: function() {
						return i.width
					},
					set: function(t) {
						i.width = t, Do(n, t)
					}
				},
				name: {
					get: function() {
						return i.name
					},
					set: function(t) {
						i.name = t, o && (o.innerHTML = i.name)
					}
				},
				closed: {
					get: function() {
						return i.closed
					},
					set: function(e) {
						i.closed = e, i.closed ? Js.addClass(n.__ul, t.CLASS_CLOSED) : Js.removeClass(n.__ul, t.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? t.TEXT_OPEN : t.TEXT_CLOSED)
					}
				},
				load: {
					get: function() {
						return i.load
					}
				},
				useLocalStorage: {
					get: function() {
						return a
					},
					set: function(t) {
						mo && (a = t, t ? Js.bind(window, "unload", s) : Js.unbind(window, "unload", s), localStorage.setItem(Ao(0, "isLocal"), t))
					}
				}
			}), Ls.isUndefined(i.parent)) {
				if (this.closed = i.closed || !1, Js.addClass(this.domElement, t.CLASS_MAIN), Js.makeSelectable(this.domElement, !1), mo && a) {
					n.useLocalStorage = !0;
					var l = localStorage.getItem(Ao(0, "gui"));
					l && (i.load = JSON.parse(l))
				}
				this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = t.TEXT_CLOSED, Js.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON), i.closeOnTop ? (Js.addClass(this.__closeButton, t.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (Js.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), Js.bind(this.__closeButton, "click", (function() {
					n.closed = !n.closed
				}))
			} else {
				void 0 === i.closed && (i.closed = !0);
				var c = document.createTextNode(i.name);
				Js.addClass(c, "controller-name"), o = Mo(n, c), Js.addClass(this.__ul, t.CLASS_CLOSED), Js.addClass(o, "title"), Js.bind(o, "click", (function(t) {
					return t.preventDefault(), n.closed = !n.closed, !1
				})), i.closed || (this.closed = !1)
			}
			i.autoPlace && (Ls.isUndefined(i.parent) && (_o && (vo = document.createElement("div"), Js.addClass(vo, "dg"), Js.addClass(vo, t.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(vo), _o = !1), vo.appendChild(this.domElement), Js.addClass(this.domElement, t.CLASS_AUTO_PLACE)), this.parent || Do(n, i.width)), this.__resizeHandler = function() {
				n.onResizeDebounced()
			}, Js.bind(window, "resize", this.__resizeHandler), Js.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), Js.bind(this.__ul, "transitionend", this.__resizeHandler), Js.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && Po(this), s = function() {
				mo && "true" === localStorage.getItem(Ao(0, "isLocal")) && localStorage.setItem(Ao(0, "gui"), JSON.stringify(n.getSaveObject()))
			}, this.saveToLocalStorageIfPossible = s, i.parent || ((r = n.getRoot())
				.width += 1, Ls.defer((function() {
					r.width -= 1
				})))
		};

	function Mo(t, e, n) {
		var i = document.createElement("li");
		return e && i.appendChild(e), n ? t.__ul.insertBefore(i, n) : t.__ul.appendChild(i), t.onResize(), i
	}

	function So(t) {
		Js.unbind(window, "resize", t.__resizeHandler), t.saveToLocalStorageIfPossible && Js.unbind(window, "unload", t.saveToLocalStorageIfPossible)
	}

	function Eo(t, e) {
		var n = t.__preset_select[t.__preset_select.selectedIndex];
		n.innerHTML = e ? n.value + "*" : n.value
	}

	function wo(t, e) {
		var n = t.getRoot(),
			i = n.__rememberedObjects.indexOf(e.object);
		if (-1 !== i) {
			var r = n.__rememberedObjectIndecesToControllers[i];
			if (void 0 === r && (r = {}, n.__rememberedObjectIndecesToControllers[i] = r), r[e.property] = e, n.load && n.load.remembered) {
				var a = n.load.remembered,
					s = void 0;
				if (a[t.preset]) s = a[t.preset];
				else {
					if (!a.Default) return;
					s = a.Default
				}
				if (s[i] && void 0 !== s[i][e.property]) {
					var o = s[i][e.property];
					e.initialValue = o, e.setValue(o)
				}
			}
		}
	}

	function To(t, e, n, i) {
		if (void 0 === e[n]) throw new Error('Object "' + e + '" has no property "' + n + '"');
		var r = void 0;
		if (i.color) r = new so(e, n);
		else {
			var a = [e, n].concat(i.factoryArgs);
			r = ho.apply(t, a)
		}
		i.before instanceof js && (i.before = i.before.__li), wo(t, r), Js.addClass(r.domElement, "c");
		var s = document.createElement("span");
		Js.addClass(s, "property-name"), s.innerHTML = r.property;
		var o = document.createElement("div");
		o.appendChild(s), o.appendChild(r.domElement);
		var l = Mo(t, o, i.before);
		return Js.addClass(l, bo.CLASS_CONTROLLER_ROW), r instanceof so ? Js.addClass(l, "color") : Js.addClass(l, Fs(r.getValue())),
			function(t, e, n) {
				if (n.__li = e, n.__gui = t, Ls.extend(n, {
					options: function(e) {
						if (arguments.length > 1) {
							var i = n.__li.nextElementSibling;
							return n.remove(), To(t, n.object, n.property, {
								before: i,
								factoryArgs: [Ls.toArray(arguments)]
							})
						}
						if (Ls.isArray(e) || Ls.isObject(e)) {
							var r = n.__li.nextElementSibling;
							return n.remove(), To(t, n.object, n.property, {
								before: r,
								factoryArgs: [e]
							})
						}
					},
					name: function(t) {
						return n.__li.firstElementChild.firstElementChild.innerHTML = t, n
					},
					listen: function() {
						return n.__gui.listen(n), n
					},
					remove: function() {
						return n.__gui.remove(n), n
					}
				}), n instanceof ro) {
					var i = new no(n.object, n.property, {
						min: n.__min,
						max: n.__max,
						step: n.__step
					});
					Ls.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function(t) {
						var e = n[t],
							r = i[t];
						n[t] = i[t] = function() {
							var t = Array.prototype.slice.call(arguments);
							return r.apply(i, t), e.apply(n, t)
						}
					})), Js.addClass(e, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild)
				} else if (n instanceof no) {
					var r = function(e) {
						if (Ls.isNumber(n.__min) && Ls.isNumber(n.__max)) {
							var i = n.__li.firstElementChild.firstElementChild.innerHTML,
								r = n.__gui.__listening.indexOf(n) > -1;
							n.remove();
							var a = To(t, n.object, n.property, {
								before: n.__li.nextElementSibling,
								factoryArgs: [n.__min, n.__max, n.__step]
							});
							return a.name(i), r && a.listen(), a
						}
						return e
					};
					n.min = Ls.compose(r, n.min), n.max = Ls.compose(r, n.max)
				} else n instanceof Ks ? (Js.bind(e, "click", (function() {
					Js.fakeEvent(n.__checkbox, "click")
				})), Js.bind(n.__checkbox, "click", (function(t) {
					t.stopPropagation()
				}))) : n instanceof ao ? (Js.bind(e, "click", (function() {
					Js.fakeEvent(n.__button, "click")
				})), Js.bind(e, "mouseover", (function() {
					Js.addClass(n.__button, "hover")
				})), Js.bind(e, "mouseout", (function() {
					Js.removeClass(n.__button, "hover")
				}))) : n instanceof so && (Js.addClass(e, "color"), n.updateDisplay = Ls.compose((function(t) {
					return e.style.borderLeftColor = n.__color.toString(), t
				}), n.updateDisplay), n.updateDisplay());
				n.setValue = Ls.compose((function(e) {
					return t.getRoot()
						.__preset_select && n.isModified() && Eo(t.getRoot(), !0), e
				}), n.setValue)
			}(t, l, r), t.__controllers.push(r), r
	}

	function Ao(t, e) {
		return document.location.href + "." + e
	}

	function Ro(t, e, n) {
		var i = document.createElement("option");
		i.innerHTML = e, i.value = e, t.__preset_select.appendChild(i), n && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
	}

	function Co(t, e) {
		e.style.display = t.useLocalStorage ? "block" : "none"
	}

	function Lo(t) {
		var e = t.__save_row = document.createElement("li");
		Js.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), Js.addClass(e, "save-row");
		var n = document.createElement("span");
		n.innerHTML = "&nbsp;", Js.addClass(n, "button gears");
		var i = document.createElement("span");
		i.innerHTML = "Save", Js.addClass(i, "button"), Js.addClass(i, "save");
		var r = document.createElement("span");
		r.innerHTML = "New", Js.addClass(r, "button"), Js.addClass(r, "save-as");
		var a = document.createElement("span");
		a.innerHTML = "Revert", Js.addClass(a, "button"), Js.addClass(a, "revert");
		var s = t.__preset_select = document.createElement("select");
		if (t.load && t.load.remembered ? Ls.each(t.load.remembered, (function(e, n) {
			Ro(t, n, n === t.preset)
		})) : Ro(t, fo, !1), Js.bind(s, "change", (function() {
			for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
			t.preset = this.value
		})), e.appendChild(s), e.appendChild(n), e.appendChild(i), e.appendChild(r), e.appendChild(a), mo) {
			var o = document.getElementById("dg-local-explain"),
				l = document.getElementById("dg-local-storage");
			document.getElementById("dg-save-locally")
				.style.display = "block", "true" === localStorage.getItem(Ao(0, "isLocal")) && l.setAttribute("checked", "checked"), Co(t, o), Js.bind(l, "change", (function() {
					t.useLocalStorage = !t.useLocalStorage, Co(t, o)
				}))
		}
		var c = document.getElementById("dg-new-constructor");
		Js.bind(c, "keydown", (function(t) {
			!t.metaKey || 67 !== t.which && 67 !== t.keyCode || go.hide()
		})), Js.bind(n, "click", (function() {
			c.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), go.show(), c.focus(), c.select()
		})), Js.bind(i, "click", (function() {
			t.save()
		})), Js.bind(r, "click", (function() {
			var e = prompt("Enter a new preset name.");
			e && t.saveAs(e)
		})), Js.bind(a, "click", (function() {
			t.revert()
		}))
	}

	function Po(t) {
		var e = void 0;

		function n(n) {
			return n.preventDefault(), t.width += e - n.clientX, t.onResize(), e = n.clientX, !1
		}

		function i() {
			Js.removeClass(t.__closeButton, bo.CLASS_DRAG), Js.unbind(window, "mousemove", n), Js.unbind(window, "mouseup", i)
		}

		function r(r) {
			return r.preventDefault(), e = r.clientX, Js.addClass(t.__closeButton, bo.CLASS_DRAG), Js.bind(window, "mousemove", n), Js.bind(window, "mouseup", i), !1
		}
		t.__resize_handle = document.createElement("div"), Ls.extend(t.__resize_handle.style, {
			width: "6px",
			marginLeft: "-3px",
			height: "200px",
			cursor: "ew-resize",
			position: "absolute"
		}), Js.bind(t.__resize_handle, "mousedown", r), Js.bind(t.__closeButton, "mousedown", r), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
	}

	function Do(t, e) {
		t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
	}

	function Oo(t, e) {
		var n = {};
		return Ls.each(t.__rememberedObjects, (function(i, r) {
			var a = {},
				s = t.__rememberedObjectIndecesToControllers[r];
			Ls.each(s, (function(t, n) {
				a[n] = e ? t.initialValue : t.getValue()
			})), n[r] = a
		})), n
	}

	function No(t) {
		0 !== t.length && uo.call(window, (function() {
			No(t)
		})), Ls.each(t, (function(t) {
			t.updateDisplay()
		}))
	}
	bo.toggleHide = function() {
		xo = !xo, Ls.each(yo, (function(t) {
			t.domElement.style.display = xo ? "none" : ""
		}))
	}, bo.CLASS_AUTO_PLACE = "a", bo.CLASS_AUTO_PLACE_CONTAINER = "ac", bo.CLASS_MAIN = "main", bo.CLASS_CONTROLLER_ROW = "cr", bo.CLASS_TOO_TALL = "taller-than-window", bo.CLASS_CLOSED = "closed", bo.CLASS_CLOSE_BUTTON = "close-button", bo.CLASS_CLOSE_TOP = "close-top", bo.CLASS_CLOSE_BOTTOM = "close-bottom", bo.CLASS_DRAG = "drag", bo.DEFAULT_WIDTH = 245, bo.TEXT_CLOSED = "Close Controls", bo.TEXT_OPEN = "Open Controls", bo._keydownHandler = function(t) {
		"text" === document.activeElement.type || 72 !== t.which && 72 !== t.keyCode || bo.toggleHide()
	}, Js.bind(window, "keydown", bo._keydownHandler, !1), Ls.extend(bo.prototype, {
		add: function(t, e) {
			return To(this, t, e, {
				factoryArgs: Array.prototype.slice.call(arguments, 2)
			})
		},
		addColor: function(t, e) {
			return To(this, t, e, {
				color: !0
			})
		},
		remove: function(t) {
			this.__ul.removeChild(t.__li), this.__controllers.splice(this.__controllers.indexOf(t), 1);
			var e = this;
			Ls.defer((function() {
				e.onResize()
			}))
		},
		destroy: function() {
			if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
			this.autoPlace && vo.removeChild(this.domElement);
			var t = this;
			Ls.each(this.__folders, (function(e) {
				t.removeFolder(e)
			})), Js.unbind(window, "keydown", bo._keydownHandler, !1), So(this)
		},
		addFolder: function(t) {
			if (void 0 !== this.__folders[t]) throw new Error('You already have a folder in this GUI by the name "' + t + '"');
			var e = {
				name: t,
				parent: this
			};
			e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
			var n = new bo(e);
			this.__folders[t] = n;
			var i = Mo(this, n.domElement);
			return Js.addClass(i, "folder"), n
		},
		removeFolder: function(t) {
			this.__ul.removeChild(t.domElement.parentElement), delete this.__folders[t.name], this.load && this.load.folders && this.load.folders[t.name] && delete this.load.folders[t.name], So(t);
			var e = this;
			Ls.each(t.__folders, (function(e) {
				t.removeFolder(e)
			})), Ls.defer((function() {
				e.onResize()
			}))
		},
		open: function() {
			this.closed = !1
		},
		close: function() {
			this.closed = !0
		},
		hide: function() {
			this.domElement.style.display = "none"
		},
		show: function() {
			this.domElement.style.display = ""
		},
		onResize: function() {
			var t = this.getRoot();
			if (t.scrollable) {
				var e = Js.getOffset(t.__ul)
					.top,
					n = 0;
				Ls.each(t.__ul.childNodes, (function(e) {
					t.autoPlace && e === t.__save_row || (n += Js.getHeight(e))
				})), window.innerHeight - e - 20 < n ? (Js.addClass(t.domElement, bo.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (Js.removeClass(t.domElement, bo.CLASS_TOO_TALL), t.__ul.style.height = "auto")
			}
			t.__resize_handle && Ls.defer((function() {
				t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
			})), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
		},
		onResizeDebounced: Ls.debounce((function() {
			this.onResize()
		}), 50),
		remember: function() {
			if (Ls.isUndefined(go) && ((go = new po)
				.domElement.innerHTML = co), this.parent) throw new Error("You can only call remember on a top level GUI.");
			var t = this;
			Ls.each(Array.prototype.slice.call(arguments), (function(e) {
				0 === t.__rememberedObjects.length && Lo(t), -1 === t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
			})), this.autoPlace && Do(this, this.width)
		},
		getRoot: function() {
			for (var t = this; t.parent;) t = t.parent;
			return t
		},
		getSaveObject: function() {
			var t = this.load;
			return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = Oo(this)), t.folders = {}, Ls.each(this.__folders, (function(e, n) {
				t.folders[n] = e.getSaveObject()
			})), t
		},
		save: function() {
			this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = Oo(this), Eo(this, !1), this.saveToLocalStorageIfPossible()
		},
		saveAs: function(t) {
			this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = Oo(this, !0)), this.load.remembered[t] = Oo(this), this.preset = t, Ro(this, t, !0), this.saveToLocalStorageIfPossible()
		},
		revert: function(t) {
			Ls.each(this.__controllers, (function(e) {
				this.getRoot()
					.load.remembered ? wo(t || this.getRoot(), e) : e.setValue(e.initialValue), e.__onFinishChange && e.__onFinishChange.call(e, e.getValue())
			}), this), Ls.each(this.__folders, (function(t) {
				t.revert(t)
			})), t || Eo(this.getRoot(), !1)
		},
		listen: function(t) {
			var e = 0 === this.__listening.length;
			this.__listening.push(t), e && No(this.__listening)
		},
		updateDisplay: function() {
			Ls.each(this.__controllers, (function(t) {
				t.updateDisplay()
			})), Ls.each(this.__folders, (function(t) {
				t.updateDisplay()
			}))
		}
	});
	class Io extends pa {
		constructor(t) {
			super(), this.scale = t
		}
		getPoint(t, e = new G) {
			const n = t * Math.PI * 2;
			let i = 16 * Math.pow(Math.sin(n), 3),
				r = -(14 * Math.cos(n) - 5 * Math.cos(2 * n) - 2 * Math.cos(3 * n) - Math.cos(3 * n));
			return e.set(i, r, 0)
				.multiplyScalar(this.scale)
		}
	}
	class Uo {
		constructor(t = Math) {
			this.grad3 = [
				[1, 1, 0],
				[-1, 1, 0],
				[1, -1, 0],
				[-1, -1, 0],
				[1, 0, 1],
				[-1, 0, 1],
				[1, 0, -1],
				[-1, 0, -1],
				[0, 1, 1],
				[0, -1, 1],
				[0, 1, -1],
				[0, -1, -1]
			], this.grad4 = [
				[0, 1, 1, 1],
				[0, 1, 1, -1],
				[0, 1, -1, 1],
				[0, 1, -1, -1],
				[0, -1, 1, 1],
				[0, -1, 1, -1],
				[0, -1, -1, 1],
				[0, -1, -1, -1],
				[1, 0, 1, 1],
				[1, 0, 1, -1],
				[1, 0, -1, 1],
				[1, 0, -1, -1],
				[-1, 0, 1, 1],
				[-1, 0, 1, -1],
				[-1, 0, -1, 1],
				[-1, 0, -1, -1],
				[1, 1, 0, 1],
				[1, 1, 0, -1],
				[1, -1, 0, 1],
				[1, -1, 0, -1],
				[-1, 1, 0, 1],
				[-1, 1, 0, -1],
				[-1, -1, 0, 1],
				[-1, -1, 0, -1],
				[1, 1, 1, 0],
				[1, 1, -1, 0],
				[1, -1, 1, 0],
				[1, -1, -1, 0],
				[-1, 1, 1, 0],
				[-1, 1, -1, 0],
				[-1, -1, 1, 0],
				[-1, -1, -1, 0]
			], this.p = [];
			for (let e = 0; e < 256; e++) this.p[e] = Math.floor(256 * t.random());
			this.perm = [];
			for (let t = 0; t < 512; t++) this.perm[t] = this.p[255 & t];
			this.simplex = [
				[0, 1, 2, 3],
				[0, 1, 3, 2],
				[0, 0, 0, 0],
				[0, 2, 3, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 2, 3, 0],
				[0, 2, 1, 3],
				[0, 0, 0, 0],
				[0, 3, 1, 2],
				[0, 3, 2, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 3, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 2, 0, 3],
				[0, 0, 0, 0],
				[1, 3, 0, 2],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[2, 3, 0, 1],
				[2, 3, 1, 0],
				[1, 0, 2, 3],
				[1, 0, 3, 2],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[2, 0, 3, 1],
				[0, 0, 0, 0],
				[2, 1, 3, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[2, 0, 1, 3],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[3, 0, 1, 2],
				[3, 0, 2, 1],
				[0, 0, 0, 0],
				[3, 1, 2, 0],
				[2, 1, 0, 3],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[3, 1, 0, 2],
				[0, 0, 0, 0],
				[3, 2, 0, 1],
				[3, 2, 1, 0]
			]
		}
		dot(t, e, n) {
			return t[0] * e + t[1] * n
		}
		dot3(t, e, n, i) {
			return t[0] * e + t[1] * n + t[2] * i
		}
		dot4(t, e, n, i, r) {
			return t[0] * e + t[1] * n + t[2] * i + t[3] * r
		}
		noise(t, e) {
			let n, i, r;
			const a = (t + e) * (.5 * (Math.sqrt(3) - 1)),
				s = Math.floor(t + a),
				o = Math.floor(e + a),
				l = (3 - Math.sqrt(3)) / 6,
				c = (s + o) * l,
				h = t - (s - c),
				u = e - (o - c);
			let d, p;
			h > u ? (d = 1, p = 0) : (d = 0, p = 1);
			const f = h - d + l,
				m = u - p + l,
				g = h - 1 + 2 * l,
				_ = u - 1 + 2 * l,
				v = 255 & s,
				x = 255 & o,
				y = this.perm[v + this.perm[x]] % 12,
				b = this.perm[v + d + this.perm[x + p]] % 12,
				M = this.perm[v + 1 + this.perm[x + 1]] % 12;
			let S = .5 - h * h - u * u;
			S < 0 ? n = 0 : (S *= S, n = S * S * this.dot(this.grad3[y], h, u));
			let E = .5 - f * f - m * m;
			E < 0 ? i = 0 : (E *= E, i = E * E * this.dot(this.grad3[b], f, m));
			let w = .5 - g * g - _ * _;
			return w < 0 ? r = 0 : (w *= w, r = w * w * this.dot(this.grad3[M], g, _)), 70 * (n + i + r)
		}
		noise3d(t, e, n) {
			let i, r, a, s;
			const o = (t + e + n) * (1 / 3),
				l = Math.floor(t + o),
				c = Math.floor(e + o),
				h = Math.floor(n + o),
				u = 1 / 6,
				d = (l + c + h) * u,
				p = t - (l - d),
				f = e - (c - d),
				m = n - (h - d);
			let g, _, v, x, y, b;
			p >= f ? f >= m ? (g = 1, _ = 0, v = 0, x = 1, y = 1, b = 0) : p >= m ? (g = 1, _ = 0, v = 0, x = 1, y = 0, b = 1) : (g = 0, _ = 0, v = 1, x = 1, y = 0, b = 1) : f < m ? (g = 0, _ = 0, v = 1, x = 0, y = 1, b = 1) : p < m ? (g = 0, _ = 1, v = 0, x = 0, y = 1, b = 1) : (g = 0, _ = 1, v = 0, x = 1, y = 1, b = 0);
			const M = p - g + u,
				S = f - _ + u,
				E = m - v + u,
				w = p - x + 2 * u,
				T = f - y + 2 * u,
				A = m - b + 2 * u,
				R = p - 1 + .5,
				C = f - 1 + .5,
				L = m - 1 + .5,
				P = 255 & l,
				D = 255 & c,
				O = 255 & h,
				N = this.perm[P + this.perm[D + this.perm[O]]] % 12,
				I = this.perm[P + g + this.perm[D + _ + this.perm[O + v]]] % 12,
				U = this.perm[P + x + this.perm[D + y + this.perm[O + b]]] % 12,
				F = this.perm[P + 1 + this.perm[D + 1 + this.perm[O + 1]]] % 12;
			let z = .6 - p * p - f * f - m * m;
			z < 0 ? i = 0 : (z *= z, i = z * z * this.dot3(this.grad3[N], p, f, m));
			let B = .6 - M * M - S * S - E * E;
			B < 0 ? r = 0 : (B *= B, r = B * B * this.dot3(this.grad3[I], M, S, E));
			let H = .6 - w * w - T * T - A * A;
			H < 0 ? a = 0 : (H *= H, a = H * H * this.dot3(this.grad3[U], w, T, A));
			let k = .6 - R * R - C * C - L * L;
			return k < 0 ? s = 0 : (k *= k, s = k * k * this.dot3(this.grad3[F], R, C, L)), 32 * (i + r + a + s)
		}
		noise4d(t, e, n, i) {
			const r = this.grad4,
				a = this.simplex,
				s = this.perm,
				o = (Math.sqrt(5) - 1) / 4,
				l = (5 - Math.sqrt(5)) / 20;
			let c, h, u, d, p;
			const f = (t + e + n + i) * o,
				m = Math.floor(t + f),
				g = Math.floor(e + f),
				_ = Math.floor(n + f),
				v = Math.floor(i + f),
				x = (m + g + _ + v) * l,
				y = t - (m - x),
				b = e - (g - x),
				M = n - (_ - x),
				S = i - (v - x),
				E = (y > b ? 32 : 0) + (y > M ? 16 : 0) + (b > M ? 8 : 0) + (y > S ? 4 : 0) + (b > S ? 2 : 0) + (M > S ? 1 : 0),
				w = a[E][0] >= 3 ? 1 : 0,
				T = a[E][1] >= 3 ? 1 : 0,
				A = a[E][2] >= 3 ? 1 : 0,
				R = a[E][3] >= 3 ? 1 : 0,
				C = a[E][0] >= 2 ? 1 : 0,
				L = a[E][1] >= 2 ? 1 : 0,
				P = a[E][2] >= 2 ? 1 : 0,
				D = a[E][3] >= 2 ? 1 : 0,
				O = a[E][0] >= 1 ? 1 : 0,
				N = a[E][1] >= 1 ? 1 : 0,
				I = a[E][2] >= 1 ? 1 : 0,
				U = a[E][3] >= 1 ? 1 : 0,
				F = y - w + l,
				z = b - T + l,
				B = M - A + l,
				H = S - R + l,
				k = y - C + 2 * l,
				G = b - L + 2 * l,
				V = M - P + 2 * l,
				W = S - D + 2 * l,
				X = y - O + 3 * l,
				j = b - N + 3 * l,
				q = M - I + 3 * l,
				Y = S - U + 3 * l,
				Z = y - 1 + 4 * l,
				J = b - 1 + 4 * l,
				K = M - 1 + 4 * l,
				Q = S - 1 + 4 * l,
				$ = 255 & m,
				tt = 255 & g,
				et = 255 & _,
				nt = 255 & v,
				it = s[$ + s[tt + s[et + s[nt]]]] % 32,
				rt = s[$ + w + s[tt + T + s[et + A + s[nt + R]]]] % 32,
				at = s[$ + C + s[tt + L + s[et + P + s[nt + D]]]] % 32,
				st = s[$ + O + s[tt + N + s[et + I + s[nt + U]]]] % 32,
				ot = s[$ + 1 + s[tt + 1 + s[et + 1 + s[nt + 1]]]] % 32;
			let lt = .6 - y * y - b * b - M * M - S * S;
			lt < 0 ? c = 0 : (lt *= lt, c = lt * lt * this.dot4(r[it], y, b, M, S));
			let ct = .6 - F * F - z * z - B * B - H * H;
			ct < 0 ? h = 0 : (ct *= ct, h = ct * ct * this.dot4(r[rt], F, z, B, H));
			let ht = .6 - k * k - G * G - V * V - W * W;
			ht < 0 ? u = 0 : (ht *= ht, u = ht * ht * this.dot4(r[at], k, G, V, W));
			let ut = .6 - X * X - j * j - q * q - Y * Y;
			ut < 0 ? d = 0 : (ut *= ut, d = ut * ut * this.dot4(r[st], X, j, q, Y));
			let dt = .6 - Z * Z - J * J - K * K - Q * Q;
			return dt < 0 ? p = 0 : (dt *= dt, p = dt * dt * this.dot4(r[ot], Z, J, K, Q)), 27 * (c + h + u + d + p)
		}
	}
	class Fo extends ua {
		constructor(t) {
			super(), this.isInner = t, this.clock = new xs(!0), this.pointScales = [], this.expandTime = .7, this.shrinkTime = .7;
			const e = new Io(1, t);
			let n = 160;
			t && (n = 260);
			const i = new us(e, n, .2, 35, !0);
			let r;
			r = t ? new Le(250 / 255, 155 / 255, 190 / 255) : new Le(240 / 255, 100 / 255, 123 / 255), new sa({
				size: .2,
				color: r,
				sizeAttenuation: !0
			});
			const a = new xe({
				transparent: !0,
				uniforms: {
					color: {
						value: r
					}
				},
				vertexShader: "\n        float random (in vec2 st) {\n          return fract(sin(dot(st.xy,\n                      vec2(12.9898,78.233)))\n                      * 43758.5453123);\n        }\n        float noise (in vec2 st) {\n          vec2 i = floor(st);\n          vec2 f = fract(st);\n          \n          float a = random(i);\n          float b = random(i + vec2(1.0, 0.0));\n          float c = random(i + vec2(0.0, 1.0));\n          float d = random(i + vec2(1.0, 1.0));\n\n          vec2 u = f*f*(3.0-2.0*f);\n          return mix(a, b, u.x) +\n                  (c - a)* u.y * (1.0 - u.x) +\n                  (d - b) * u.x * u.y;\n        }\n        void main(){\n          gl_Position = projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0);\n          //分形噪波\n          float noiseResult = 4.2*(noise(position.xy*2.5) + 0.8*noise(position.xy+3.4)+noise(position.xy*0.8))*random(position.xy);\n          //noiseResult = 4.5*random(position.xy);\n          // noiseResult = 4.0*noise(vec2(position.x+3.0,position.y*2.0+0.2));\n          // noiseResult += 2.0*noise(position.xy*5.2);\n          // noiseResult += 0.5*noise(position.xy*4.2);\n          // noiseResult += 1.0*noise((position.xy+3.2)*3.8+10.3)*random(position.xy);\n          gl_PointSize = noiseResult;\n        }\n      ",
				fragmentShader: "\n        uniform vec3 color;\n        void main(){\n          float strength = 1.0-distance(gl_PointCoord,vec2(0.5));\n          strength = step(0.5,strength);\n          gl_FragColor = vec4(color,strength);\n        }\n      "
			});
			this.geometry = i, this.material = a, this.isAnimated = !1, this.updatePoints(!1)
		}
		updatePoints(t) {
			const e = this.geometry.getAttribute("position");
			for (let n = 0; n < e.count; n++) {
				const i = new G(e.getX(n), e.getY(n), e.getZ(n));
				let r;
				if (t) {
					const t = new G(this.originPoints.getX(n), this.originPoints.getY(n), this.originPoints.getZ(n));
					r = this.animatePoint(t, this.pointScales[n])
				} else {
					r = this.translatePostion(i);
					const t = new G(0, 0, 0);
					let e = r.distanceTo(t);
					e = zo(e, 0, 20, 0, 1);
					let n = -.2 * Math.log(e);
					this.pointScales.push(n)
				}
				e.setX(n, r.x), e.setY(n, r.y), e.setZ(n, r.z)
			}
			t || (this.originPoints = e.clone())
		}
		translatePostion(t) {
			let e = t,
				n = new G(0, 0, 0)
				.sub(e),
				i = .2;
			this.isInner && (i = .15);
			const r = -i * Math.log(Math.random());
			return n = n.multiplyScalar(r), e = e.add(n), this.isInner, e = this.noisePosition(e, 2), e
		}
		noisePosition(t, e) {
			let n = t.x,
				i = t.y,
				r = t.z,
				a = (new Uo)
				.noise3d(n, i, r);
			return n += e * (Math.random() - .5) * a, i += e * (Math.random() - .5) * a, r += e * (Math.random() - .5) * a, new G(n, i, r)
		}
		animate(t) {
			this.time = t, this.clock.getElapsedTime() > this.expandTime + this.shrinkTime + .1 && this.clock.start(), this.updatePoints(!0)
		}
		animatePoint(t, e) {
			const n = this.expandTime,
				i = this.shrinkTime;
			let r, a;
			if (this.clock.elapsedTime < n) {
				a = e / n * (s = zo(this.clock.elapsedTime, 0, n, 0, 1), 50, (1 - Math.pow(50, -s)) / (1 - Math.pow(50, -1))), r = t.multiplyScalar(1 + a), this.isInner || (r = this.noisePosition(r, 10))
			} else if (this.clock.elapsedTime < i + n) {
				const s = function(t, e) {
					return (Math.pow(50, t) - 1) / (Math.pow(50, 1) - 1)
				}(zo(i + n - this.clock.elapsedTime, 0, i, 0, 1));
				a = e / i * s, r = t.multiplyScalar(1 + a), this.isInner || (r = this.noisePosition(r, 6))
			} else r = t, this.isInner || (r = this.noisePosition(r, 1));
			var s;
			return r
		}
	}

	function zo(t, e, n, i, r) {
		return t * (r - i) / (n - e)
	}
	class Bo extends ms {
		constructor(t) {
			super(t)
		}
		load(t, e, n, i) {
			const r = this,
				a = new vs(this.manager);
			a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, (function(t) {
				const n = r.parse(JSON.parse(t));
				e && e(n)
			}), n, i)
		}
		parse(t) {
			return new Ho(t)
		}
	}
	class Ho {
		constructor(t) {
			this.isFont = !0, this.type = "Font", this.data = t
		}
		generateShapes(t, e = 100) {
			const n = [],
				i = function(t, e, n) {
					const i = Array.from(t),
						r = e / n.resolution,
						a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
						s = [];
					let o = 0,
						l = 0;
					for (let t = 0; t < i.length; t++) {
						const e = i[t];
						if ("\n" === e) o = 0, l -= a;
						else {
							const t = ko(e, r, o, l, n);
							o += t.offsetX, s.push(t.path)
						}
					}
					return s
				}(t, e, this.data);
			for (let t = 0, e = i.length; t < e; t++) n.push(...i[t].toShapes());
			return n
		}
	}

	function ko(t, e, n, i, r) {
		const a = r.glyphs[t] || r.glyphs["?"];
		if (!a) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
		const s = new Ms;
		let o, l, c, h, u, d, p, f;
		if (a.o) {
			const t = a._cachedOutline || (a._cachedOutline = a.o.split(" "));
			for (let r = 0, a = t.length; r < a;) switch (t[r++]) {
				case "m":
					o = t[r++] * e + n, l = t[r++] * e + i, s.moveTo(o, l);
					break;
				case "l":
					o = t[r++] * e + n, l = t[r++] * e + i, s.lineTo(o, l);
					break;
				case "q":
					c = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, s.quadraticCurveTo(u, d, c, h);
					break;
				case "b":
					c = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, p = t[r++] * e + n, f = t[r++] * e + i, s.bezierCurveTo(u, d, p, f, c, h)
			}
		}
		return {
			offsetX: a.ha * e,
			path: s
		}
	}
	class Go extends ls {
		constructor(t, e = {}) {
			const n = e.font;
			if (void 0 === n) super();
			else {
				const i = n.generateShapes(t, e.size);
				e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), super(i, e)
			}
			this.type = "TextGeometry"
		}
	}
	const Vo = new class {
		constructor(t) {
			this.scene = new aa;
			const e = window.innerWidth / window.innerHeight;
			this.camera = new On(70, e, .1, 1e3), this.camera.position.z = t.z, this.light = null;
			const n = new ra({
				antialias: !0
			});
			n.setPixelRatio(window.devicePixelRatio), n.setSize(self.innerWidth, self.innerHeight), self.document.body.appendChild(n.domElement), this.renderer = n, (() => {
					this.control = new Ts(this.camera, n.domElement), this.control.enableDamping = !0
				})(),
				function() {
					window.addEventListener("resize", (() => {
						this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), n.setSize(window.innerWidth, window.innerHeight), n.setPixelRatio(window.devicePixelRatio)
					})), window.addEventListener("dblclick", (() => {
						document.fullscreenElement ? document.exitFullscreen() : n.domElement.requestFullscreen()
					}))
				}.call(this)
		}
		addView(t) {
			this.scene.add(t)
		}
		removeView() {}
		renderView() {
			this.renderer.render(this.scene, this.camera)
		}
		startAnimation(t) {
			this.renderer.setAnimationLoop((e => {
				t(e), this.control.update(), this.renderView()
			}))
		}
	}(new G(0, 0, 50));
//	debugger
	let Wo = location.search,
		Xo = "何江"; - 1 !== Wo.indexOf("?") && (Xo = Wo.substring(1), Xo = decodeURI(Xo), Xo = Xo.replace(/\\n/, "\n"));
	const jo = new class extends mn {
		constructor(t) {
			super(), (new Bo)
				.load("https://jmy.qmgf.net/preview/font.json", (e => {
					this.geometry = new Go(t, {
						font: e,
						size: 1,
						height: 0,
						curveSegments: 5,
						bevelEnabled: !1,
						bevelThickness: 0,
						bevelSize: 0,
						bevelSegments: 1
					}), this.material = new Je({
						color: 65535
					}), this.onLoad()
				}), (function(t) {}), (function(t) {
					console.log("An error happened")
				}))
		}
		onLoad() {}
	}(Xo);
	jo.onLoad = () => {
		jo.geometry.computeBoundingBox();
		const t = jo.geometry.boundingBox.max;
		jo.position.set(-t.x / 2, -t.y / 2, -1), jo.translateY(3), jo.material.color = new Le(1, 200 / 255, 225 / 255)
	}, Vo.addView(jo);
	const qo = new class extends ua {
		constructor() {
			super();
			const t = new hs(30, 65, 66),
				e = new sa({
					transparent: !0,
					size: .3,
					color: new Le(250 / 255, 155 / 255, 190 / 255),
					sizeAttenuation: !0
				});
			this.geometry = t, this.material = e, this.scale.set(1, .05, 1), this.translateY(-20)
		}
	};
	qo.translateY(3), Vo.addView(qo);
	const Yo = new Fo(!0);
	Yo.translateY(3), Yo.rotateZ(Math.PI), Yo.scale.set(.8, .85, 1), Vo.addView(Yo);
	const Zo = new Fo(!1);
	Zo.translateY(3), Zo.rotateZ(Math.PI), Zo.scale.set(.95, 1, 1), Vo.addView(Zo), Vo.startAnimation((t => {
		t % 100 && qo.rotateY(8), Yo.animate(t), Yo.geometry.attributes.position.needsUpdate = !0, Zo.animate(t), Zo.geometry.attributes.position.needsUpdate = !0
	}))
})();