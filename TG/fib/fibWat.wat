(module
  (type (;0;) (func (param i32)))
  (type (;1;) (func (result i32)))
  (type (;2;) (func (param i32) (result i32)))
  (func (;0;) (type 2) (param i32) (result i32)
    (local i32 i32 i32 i32)
    local.get 0
    i32.const -1
    i32.add
    local.tee 2
    i32.const 2
    i32.lt_u
    if  ;; label = @1
      i32.const 1
      return
    end
    i32.const 1
    local.set 3
    local.get 0
    local.set 1
    loop  ;; label = @1
      local.get 1
      i32.const -2
      i32.add
      local.set 4
      local.get 2
      call 0
      local.get 3
      i32.add
      local.set 0
      local.get 1
      i32.const -3
      i32.add
      local.tee 2
      i32.const 2
      i32.ge_u
      if  ;; label = @2
        local.get 0
        local.set 3
        local.get 4
        local.set 1
        br 1 (;@1;)
      end
    end
    local.get 0)
  (func (;1;) (type 0) (param i32)
    local.get 0
    global.set 0)
  (func (;2;) (type 1) (result i32)
    global.get 0)
  (func (;3;) (type 2) (param i32) (result i32)
    (local i32 i32)
    global.get 0
    local.set 2
    local.get 0
    global.get 0
    i32.add
    global.set 0
    global.get 0
    i32.const 15
    i32.add
    i32.const -16
    i32.and
    global.set 0
    local.get 2)
  (global (;0;) (mut i32) (i32.const 2768))
  (export "a" (func 0))
  (export "b" (func 3))
  (export "c" (func 1))
  (export "d" (func 2)))
