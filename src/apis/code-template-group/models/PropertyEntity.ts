/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 属性实体
 * @export
 * @interface PropertyEntity
 */
export interface PropertyEntity {
  /**
   * 属性ID
   * @type {string}
   * @memberof PropertyEntity
   */
  id?: string;
  /**
   * 属性代码
   * @type {string}
   * @memberof PropertyEntity
   */
  code: string;
  /**
   * 属性名称
   * @type {string}
   * @memberof PropertyEntity
   */
  name: string;
  /**
   * 属性描述
   * @type {string}
   * @memberof PropertyEntity
   */
  description?: string;
  /**
   * 属性类型
   * @type {string}
   * @memberof PropertyEntity
   */
  type: PropertyEntityTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum PropertyEntityTypeEnum {
  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
  LOCALDATETIME = 'LOCAL_DATE_TIME',
}
