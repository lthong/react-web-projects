import React, { useState, useCallback, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Loader from '@/components/Loader';
import useDevice from '@/hooks/useDevice';

const ToDoList = () => {
  const { isMobile } = useDevice();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addValue, setAddValue] = useState('');

  const onAddValueChange = useCallback((e) => {
    setAddValue(e.target.value);
  }, []);

  const todos = useMemo(
    () =>
      data.map((item) => (
        <div
          key={item.id}
          className={clsx('item', {
            completed: item.completed,
            'm-size': isMobile,
          })}
        >
          {!item.edit ? (
            <div
              className='label'
              onClick={() => {
                setData((preState) =>
                  preState.map((target) =>
                    target.id === item.id
                      ? {
                          ...target,
                          completed: !target.completed,
                        }
                      : target
                  )
                );
              }}
            >
              {item.title || '...'}
            </div>
          ) : (
            <div className='ui action input edit-bar'>
              <input
                type='text'
                value={item.editValue}
                onChange={(e) => {
                  const editValue = e.target?.value;
                  setData((preState) => {
                    return preState.map((target) =>
                      target.id === item.id ? { ...target, editValue } : target
                    );
                  });
                }}
                maxLength={30}
              />
              <button
                className='ui button'
                onClick={(e) => {
                  e.stopPropagation();
                  setData((preState) =>
                    preState.map((target) =>
                      target.id === item.id
                        ? {
                            ...target,
                            title: target.editValue,
                            edit: false,
                          }
                        : target
                    )
                  );
                }}
              >
                Save
              </button>
              <button
                className='ui button'
                onClick={(e) => {
                  e.stopPropagation();
                  setData((preState) =>
                    preState.map((target) =>
                      target.id === item.id
                        ? { ...target, edit: false, editValue: target.title }
                        : target
                    )
                  );
                }}
              >
                Cancel
              </button>
            </div>
          )}
          {!item.edit && (
            <FaEdit
              size={20}
              className='btn'
              onClick={(e) => {
                e.stopPropagation();
                setData((preState) =>
                  preState.map((target) =>
                    target.id === item.id ? { ...target, edit: true } : target
                  )
                );
              }}
            />
          )}
          <FaTrashAlt
            size={20}
            className='btn'
            onClick={(e) => {
              e.stopPropagation();
              setData((preState) =>
                preState.filter((target) => target.id !== item.id)
              );
            }}
          />
        </div>
      )),
    [data, isMobile]
  );

  const onAdd = useCallback(() => {
    if (addValue) {
      setData((preState) => [
        ...preState,
        {
          id: Math.max(...preState.map((item) => item.id)) + 1,
          title: addValue,
          completed: false,
          edit: false,
          editValue: addValue,
        },
      ]);
      setAddValue('');
    }
  }, [addValue]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.map((item) => ({
            id: item.id,
            title: item.title,
            completed: item.completed,
            edit: false,
            editValue: item.title,
          }))
        );
      })
      .catch(() => {
        alert('API Error!');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='to-do-list'>
      <div className='title'>TO DO LIST</div>
      <div className='ui action input large add-bar'>
        <input
          type='text'
          placeholder='input a todo...'
          value={addValue}
          onChange={onAddValueChange}
          maxLength={30}
        />
        <div
          className={clsx('ui button', { disabled: !addValue })}
          onClick={onAdd}
        >
          ADD
        </div>
      </div>
      {loading ? <Loader /> : todos}
    </div>
  );
};

export default ToDoList;
